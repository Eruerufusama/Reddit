export async function FetchReddit(urlSuffix: string) {
    const response = await fetch(`https://www.reddit.com/r/${urlSuffix}.json`);
    const data = await response.json();
 
    if (response.ok) {
        return data.data.children;
    } else {
        throw new Error(data);
    }
};