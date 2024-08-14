import { PlusSquare } from 'lucide-react'
import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Button } from '@/components/ui/button';
import { Input } from "@/components/ui/input";
  

function AddResume() {

    const [openDialog, setOpenDialog] = useState(false);
    const [resumeTitle, setResumeTitle] = useState();

    const onCreate = () => {
        console.log(resumeTitle);
    }

  return (
    <div>
        <div className='p-14 py-24 border items-center 
                        flex justify-center bg-secondary 
                        rounded-lg h-[280px] hover:scale-105 
                        transition-all hover:shadow-lg 
                        cursor-pointer border-dashed' onClick={()=>setOpenDialog(true)}>
            <PlusSquare />
        </div>
        <Dialog open={openDialog}>
        <DialogContent>
            <DialogHeader>
            <DialogTitle>Create New Resume</DialogTitle>
            <DialogDescription>
                <p>Add a title for your new resume</p>
                <Input className='mt-2' placeholder='Example: React resume' onChange={(e)=>setResumeTitle(e.target.value)}/>
            </DialogDescription>
            <div className='flex justify-end gap-5'>
                <Button variant="ghost" onClick={()=>setOpenDialog(false)}>Cancel</Button>
                <Button onClick={()=>onCreate()} disabled={!resumeTitle}>Create</Button>
            </div>
            </DialogHeader>
        </DialogContent>
        </Dialog>

    </div>
  )
}

export default AddResume