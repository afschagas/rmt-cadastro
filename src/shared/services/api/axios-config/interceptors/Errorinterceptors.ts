import { AxiosError } from "axios";

// Função JavaScript
export const errorInterceptor = (error: AxiosError) => {
  if (error.message === "Network Error") {
    // Adiciona um interceptador para msg.
    return Promise.reject(new Error("Error de conexão."));
  }

  if (error.response?.status === 401) {
    // Do something (Faça alguma coisa)
  }

  return Promise.reject(error);
};
