import "../styles/PreviewCard.css"

export function PreviewCard({colourEntry, textColour}) {

    return (
        <div className="previewCard" style={{backgroundColor: colourEntry.hex, color: textColour}}>
            <h1>Preview Content Card</h1>
            <h5>Subtitle of card</h5>

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, dolores ullam. Quaerat veniam dolorem culpa voluptatem tenetur ullam mollitia officia adipisci provident totam nam nisi alias, quibusdam neque animi ab.
            </p>

            <button>
                Example Button
            </button>

        </div>
    )
}