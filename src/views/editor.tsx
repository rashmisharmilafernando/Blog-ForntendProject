import React, { useEffect, useState } from 'react';
import Input from "./../components/input/input";
import * as ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Swal from "sweetalert2";
import axios from "axios";
import Cookies from 'js-cookie';
import { useLocation, useNavigate } from "react-router-dom";

function Editor(): JSX.Element {


    const navigate = useNavigate();
    const location = useLocation();

    let article = location?.state?.article;

    const [title, setTitle] = useState<string>(article ? article.title : "");
    const [description, setDescription] = useState<string>(article ? article.description : "");

    useEffect(() => {
        //get token
        const ACCESS_TOKEN = Cookies.get("token");
        //check token -> redirect
        if (!ACCESS_TOKEN) {
            navigate("/signin");
        }
    }, []);

    const handleTitle = (e: any, type: string) => {
        setTitle(e.target.value);
    }

    const handleEditor = (html: React.SetStateAction<string>): void => {
        console.log(html);
        setDescription(html)
    }

    const validateSubmission = () => {

        console.log(title)
        console.log(description)

        if (title && description) {
            submitArticle();
        } else {
            Swal.fire({
                icon: "error",
                title: "Invalid Inputs",
                text: "Please enter valid inputs"
            });
        }
    }

    const submitArticle = () => {

        const ACCESS_TOKEN = Cookies.get("token");

        const headers = {
            'Content-Type': 'application/json',
            'Authorization': ACCESS_TOKEN
        }

        let body = article?{
            title:title,
            description:description
        }:{
            title:title,
            description:description
        }
        

        if(article){
            axios.post("http://localhost:8095/article", body, { headers: headers })
            .then(r => {
                Swal.fire({
                  icon: "success",
                  title: "Success!",
                  text: "Article Update successfully!"
                });
               navigate
              })
              .catch(e => {
                Swal.fire({
                  icon: "error",
                  title: "Sorry!",
                  text: "Something went wrong"
                });
              })
        }else{
            axios.put("http://localhost:8095/article/edit",body,{ headers: headers })
            .then(r => {
                Swal.fire({
                    icon: "success",
                    title: "Success!",
                    text: "Article created successfully!"
                });
            })
            .catch(e => {
                Swal.fire({
                    icon: "error",
                    title: "Sorry!",
                    text: "Something went wrong"
                });
            })
        }

        





       


            
    }


    return (
        <section className='px-28'>
            <div className={'text-right mt-5'}>
                <button className={'second-btn mr-1'}>Clear</button>
                <button className={'main-btn ml-1'} onClick={validateSubmission} >{article ? "Update" : "Publish"}</button>
            </div>
            <div>
                <Input
                    type={'title'}
                    name="title"
                    label="Title"
                    placeholder="Enter your Title"
                    optional={true}
                    callBack={handleTitle}
                    value={title}

                />

                {/* Rich Text editor */}

                <div className={"m-2"}>
                    <ReactQuill theme="snow" value={description} onChange={handleEditor} />
                </div>
            </div>
        </section>
    )
}

export default Editor;