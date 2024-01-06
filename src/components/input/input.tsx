import React from 'react'

interface Props {
    type: string,
    name: string,
    placeholder?: string, //?-optional
    label: string,
    optional: boolean,
    callBack: Function,
    value:string

}
class Input extends React.Component<Props, any> {
    handleInput = (e: object): void => {
        console.log()
    }
    render(): React.ReactNode {
        return (
            <div className={'m-2'}>
                <label htmlFor={this.props.name} className={'block'}>{this.props.label}{!this.props.optional ? <span className="text-red-600">*</span> : null}</label>
                <input
                    type={this.props.type}
                    id={this.props.name}
                    placeholder={this.props.placeholder}
                    className={'block border border-cyan-300 outline-none focus:border-cyan-600 h-10  w-full'}
                    onChange={e=>this.props.callBack(e,this.props.name)}
                    value={this.props.value}
                />
            </div>
        );

    }

}

export default Input