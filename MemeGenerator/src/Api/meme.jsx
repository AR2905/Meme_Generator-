export const getAllMemes = async () => {
    const Response = await fetch('https://api.imgflip.com/get_memes');
    return await Response.json();
}

