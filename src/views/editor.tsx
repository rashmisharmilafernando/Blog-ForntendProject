import React from 'react'
import Input from "../components/input/input";

class Editor extends React.Component<any, any> {
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | Iterable<React.ReactNode> | React.ReactPortal | boolean | any | null | undefined {
        return (
            <div>
                <Input type={'title'} name="title" label="Title" placeholder="Enter your Title" optional={true} />
            </div>
        )
    }
}

export default Editor;