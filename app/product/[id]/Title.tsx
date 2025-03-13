"use client";

import { useEffect } from "react";

type TitleProps = {
    title: string;
};

export default function Title({ title }: TitleProps) {
    useEffect(() => {
        document.title = `${title} - Nocturne`;
    }, []);

    return null;
}
