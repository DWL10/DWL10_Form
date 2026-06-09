import { getIp } from "./auth.service";

export const sendFiles = async (json,zip) =>
{
    const formData = new FormData();

    formData.append('data',json);
    formData.append('file',zip);

    try{
        const response = await fetch(`${getIp()}/api/upload`,{
            method: 'POST',
            body: formData,

            headers: {
                'ngrok-skip-browser-warning': 'true'
            }
        });

        const result = await response.json();

        if(response.ok)
        {
            return {state:true,connect:true};
        }else{
            console.error("An error has ocurred while uploading! ",result.message)
            return {state:false,connect:true};
        }
    }catch(err)
    {
        console.error("An error has ocurred! ",err)
        return {state:false,connect:false};
    }
}