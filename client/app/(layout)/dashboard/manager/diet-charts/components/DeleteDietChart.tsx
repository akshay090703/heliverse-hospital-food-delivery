'use client'

import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import React, { useState } from 'react'
import axios from "@/lib/axios"
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'

const DeleteDietChart = ({ id }: { id: string }) => {
    const [openDialog, setOpenDialog] = useState(false);
    const router = useRouter()

    const deleteDietPlan = async (id: string) => {
        try {
            const res = await axios.delete('/diet-charts/' + id);

            if (res.status === 200) {
                toast.success("Diet Chart successfully deleted!")
                router.push('/dashboard')
            }
        } catch (error: any) {
            toast.error(error?.data?.message)
        }
    }

    return (
        <>
            <div>
                <Button variant={'destructive'} onClick={() => setOpenDialog(true)}>Delete Plan</Button>
            </div>

            <Dialog open={openDialog} onOpenChange={setOpenDialog}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Are you absolutely sure?</DialogTitle>
                        <DialogDescription>
                            This action cannot be undone. This will permanently delete the patient and remove their data from our servers.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="flex justify-end space-x-4">
                        <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
                        <Button variant="destructive" onClick={() => deleteDietPlan(id)}>OK</Button>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default DeleteDietChart