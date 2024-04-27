export const baseAPI_URL = 'http://localhost:3000'; // Para testar no celular, substituir 'localhost' pelo endereço IP:3000 (porta do servidor)

export const userAPI_URL = `${baseAPI_URL}/api/user`;
// Rota para obter um usuário pelo ID
export const getUserByIdAPI_URL = (userId) => `${baseAPI_URL}/api/user/${userId}`;

export const petAPI_URL = `${baseAPI_URL}/api/pet`;
export const cardpetsAPI_URL = `${baseAPI_URL}/api/fourpets`;