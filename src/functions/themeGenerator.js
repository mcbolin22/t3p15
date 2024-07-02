import { colorblender, extend } from "colorblender";

// All of this to let us generate names from hex colours
import nameExtension from "colorblender/extensions/name";
import { paletten } from "paletten";
extend([nameExtension]);

export function generateTones(baseColour, themeName=""){
    // provide sanitise themeName
    let newThemeName = themeName.toLocaleLowerCase().replaceAll(" ", "-") 
    || colorblender(baseColour).name.toLocaleLowerCase().replaceAll(" ", "-")

    let rawPalettenOutput = paletten(baseColour);

    let finalisedOutput = {
        name: newThemeName,
        colours: []
    }

    let formattedColoursList = Object.keys(rawPalettenOutput).map((key) => {
        return{
            strength: key,
            hex: rawPalettenOutput[key],
            rgb: colorblender(rawPalettenOutput[key]).rgb()
        }
    });

    finalisedOutput.colours = formattedColoursList;

    return finalisedOutput;
}