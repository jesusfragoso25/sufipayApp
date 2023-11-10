const jsonPrueba = '../../desembolsos.json';

export async function obtenerDatos() {
  try {
    const response = await fetch(jsonPrueba);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
}