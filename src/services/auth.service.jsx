// src/services/statusService.js

const IP = 'https://blowzier-chanelle-unmortared.ngrok-free.dev'; 

export const checkSystemStatus = async () => {
  const controller = new AbortController();
  
  const timeoutId = setTimeout(() => controller.abort(), 5000);

  try {
    const response = await fetch(`${IP}/api/check-status`, {
      method: 'GET',
      signal: controller.signal,
      headers: {
        'ngrok-skip-browser-warning': 'true',
        'Accept': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error('Form Offline');
    }

    const driveData = await response.json();

    if(driveData.st !== "ok"){
        throw new Error('System offline')
    }
    

    return true;

  } catch (error) {

    if (error.name === 'AbortError') {
      throw new Error('Time Out');
    }

    throw error; 
    
  } finally {
    clearTimeout(timeoutId);
  }
};

export const getIp = () =>
{
  return IP;
}