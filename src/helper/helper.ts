// Turn all letter to lowercase and replace all spaces to "-", use at creating url paths
export const nameToPathConvert = (name: string) => {
    return name.toLowerCase().replace(" ", "-");
};
