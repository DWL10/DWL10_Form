export const setTotal = (type,comic,background,extcht) =>{
    let ctype,ccomic,cbackground,ccht;

    switch (type)
    {
        case "LineArt (15$)":
            ctype = 15;
            break;
        case "Flat/Colored (25$)":
            ctype = 25;
            break;
        case "Shaded (35$)":
            ctype = 35;
            break;
    }

    switch (comic)
    {
        case "No":
            ccomic = 0;
            break;
        case "Yes with 2 panels (+20%)":
            ccomic = 0.2
            break;
        case "Yes with 3 panels (+40%)":
            ccomic = 0.4
            break;
        case "Yes with 4 panels (+60%)":
            ccomic = 0.6
            break;
        case "Yes with 5 panels (+80%)":
            ccomic = 0.8
            break;
    }

    switch (background)
    {
        case "Yes (+5$)":
            cbackground = 5
            break;
        case "No":
            cbackground = 0
            break;
    }

    switch (extcht)
    {
        case "No extra character":
            ccht = 0
            break;
        case "1 extra character (+50%)":
            ccht = 0.5
            break;
        case "2 extra character (+100%)":
            ccht = 1
            break;
        case "2 extra character (+150%)":
            ccht = 1.5
            break;
    }
    const result = Math.floor(ctype + cbackground + (ctype * ccht) + (ctype * ccomic));
    return result + "$";

}