interface Color {
    color_class: string,
    name: string
}

export const colors: Color[] = [
    {
        color_class: "bg-black",
        name: "black"
    },
    {
        color_class: "bg-white",
        name: "white"
    },
    {
        color_class: "bg-gray-500",
        name: "gray"
    },
    {
        color_class: "bg-slate-500",
        name: "slate"
    },
    {
        color_class: "bg-red-500",
        name: "red"
    },
    {
        color_class: "bg-sky-400",
        name: "sky"
    },
    {
        color_class: "bg-green-500",
        name: "green"
    },
    {
        color_class: "bg-[gold]",
        name: "gold"
    },
    {
        color_class: "bg-slate-400",
        name: "slate"
    },
    {
        color_class: "bg-emerald-300",
        name: "emerald"
    },
    {
        color_class: "bg-blue-500",
        name: "blue"
    },
    {
        color_class: "bg-orange-400",
        name: "orange"
    },
    {
        color_class: "bg-neutral-500",
        name: "neutral"
    },
    {
        color_class: "bg-indigo-500",
        name: "purple"
    },
    {
        color_class: "bg-pink-500",
        name: "pink"
    },
    {
        color_class: "bg-yellow-500",
        name: "yellow"
    },
    {
        color_class: "bg-lime-500",
        name: "lime"
    },
    {
        color_class: "bg-teal-500",
        name: "teal"
    },
    {
        color_class: "bg-rose-500",
        name: "rose"
    },
    {
        color_class: "bg-slate-300",
        name: "light slate"
    },
    {
        color_class: "bg-gray-300",
        name: "light gray"
    },
]
export const whiteCheck = ["black", "gray", "red", "blue", "green", "purple", "rose", "pink", "slate"];

// handle product color
export const handleColor = (colorName: string) => {
    const matchedColor = colors.find(item => item.name === colorName);

    if (matchedColor) {
        return matchedColor.color_class
    }
    else {
        return `bg-${colorName}-500`
    }
}