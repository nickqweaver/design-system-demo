import * as React from "react"
import * as System from "../../style-guide/framer-exports"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerToggle = props => {
    return <System.Toggle {...props}></System.Toggle>
}

export const Toggle = withHOC(InnerToggle)

Toggle.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(Toggle, {
    on: {
        title: "On",
        type: ControlType.Boolean,
        defaultValue: false,
    },
})
