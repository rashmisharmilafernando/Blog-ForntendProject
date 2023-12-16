import React from "react";

interface Props {
    title?: string,
    content?: string
  }
//   interface State{

//   }

class Card extends React.Component<Props, any> {
    // react vala constructor complaxcity eka hide krnva eka nisa api  "state={}" eka use krnv
    // constructor(props:Props){
    //     super(props);
    //     this.state={count:0}
    //     console.log("constructor");
    //      }
    
    //      static getDerivedStatusFromProps(props:Props,state:State){
    //       console.log("getDerivedStatusFromProps");
    //       return null;
    //      }
    
    //      componentDidMount(): void {
    //        console.log("componentDidMount")
    //      }
    
    //      //Change State () componet eka update krnn oni nm return true nattm false
    //      shouldComponentUpdate(nextProps: Readonly<Props>, nextState: Readonly<any>, nextContext: any): boolean {
    //       console.log("shouldComponentUpdate");
    //        return true;
    //      }
    
    //      getSnapshotBeforeUpdate(prevProps: Readonly<Props>, prevState: Readonly<any>) {
    //       console.log("getSnapshotBeforeUpdate");
    //       return null;
    //      }
    
    //      componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<any>, snapshot?: any): void {
    //       console.log("componentDidUpdate");
    //      }
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | Iterable<React.ReactNode> | React.ReactPortal | boolean | any | null | undefined {
        return(
            <div className={'w-72 p-5 border-solid border-2 m-5'}>
        <h1 className={'text-2xl font-bold'}>{this.props.title}</h1>
        <p className={'my-5'}>{this.props.content}</p>
        <button className={'bg-green-600 p-2 text-white'}>Read More...</button>
      </div>
        );
    }
}

export default Card;