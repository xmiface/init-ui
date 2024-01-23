import axios from "axios";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";


const Index = observer(() => {
    useEffect(() => {
        axios.get('/api/issue/files').catch((err) => console.log(err)).then(res => console.log(res))
    }, [])

    return <div className="w-screen h-screen   bg-twitchdarkbg text-twitchgrey">
        <div className="w-[1440px] mx-auto">

        files
        </div>
    </div >
})

export default Index;