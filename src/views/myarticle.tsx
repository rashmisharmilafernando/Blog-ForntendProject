import { FaEye } from "react-icons/fa";

interface Data {
    id: number,
    title: string,
    date:string,
    content: string
  }
  
  const data: Data[] = [
    {
      id: 1,
      title: "IJSE",
      date:"2023-12-16 06:00:00",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A impedit ipsa quae tenetur totam. Ad architecto asperiores culpa cupiditate doloremque, dolores minima numquam perferendis quaerat, quasi sequi similique tempore voluptas."
    },
    {
      id: 2,
      title: "GDSE",
      date:"2023-12-16 06:00:00",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A impedit ipsa quae tenetur totam. Ad architecto asperiores culpa cupiditate doloremque, dolores minima numquam perferendis quaerat, quasi sequi similique tempore voluptas."
    },
    {
      id: 3,
      title: "Javascript",
      date:"2023-12-16 06:00:00",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A impedit ipsa quae tenetur totam. Ad architecto asperiores culpa cupiditate doloremque, dolores minima numquam perferendis quaerat, quasi sequi similique tempore voluptas."
    },
    {
      id: 4,
      title: "Typescript",
      date:"2023-12-16 06:00:00",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A impedit ipsa quae tenetur totam. Ad architecto asperiores culpa cupiditate doloremque, dolores minima numquam perferendis quaerat, quasi sequi similique tempore voluptas."
    },
    {
      id: 5,
      title: "Java",
      date:"2023-12-16 06:00:00",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A impedit ipsa quae tenetur totam. Ad architecto asperiores culpa cupiditate doloremque, dolores minima numquam perferendis quaerat, quasi sequi similique tempore voluptas."
    },
    {
      id: 6,
      title: "Go",
      date:"2023-12-16 06:00:00",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A impedit ipsa quae tenetur totam. Ad architecto asperiores culpa cupiditate doloremque, dolores minima numquam perferendis quaerat, quasi sequi similique tempore voluptas."
    },
  ];
const Myarticle = (): JSX.Element => {
    return (
        <section>
            <div>
                <table className="my-5 mx-20">
                    <thead className="bg-gray-100">
                        <tr>
                            <th  className="py-5 ">Date</th>
                            <th  className="py-5 ">Ttile</th>
                            <th  className="py-5 ">Content</th>
                            <th  className="py-5 ">Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((r:Data,index:number)=>{
                                return<tr className="border-b">
                                    <td className="w-[15%]">{r.date}</td>
                                    <td className="w-[20%]">{r.title}</td>
                                    <td className="w-[50%]">{r.content}</td>
                                    <td className="w-[15%]">xxxxxxx</td>

                                    <button><FaEye/></button>
                                    <button></button>
                                    <button></button>
                                </tr>
                            })
                        }

                    </tbody>

                </table>
            </div>
        </section>
    );
}
export default Myarticle;