export const useFetch = async (endpoint: string) => {
    const res = await fetch(`${process.env.URL}/api/v1/${endpoint}`);
    const error = res.ok ? "" : res.statusText;
    const data = await res.json();

    return { data, error };
}