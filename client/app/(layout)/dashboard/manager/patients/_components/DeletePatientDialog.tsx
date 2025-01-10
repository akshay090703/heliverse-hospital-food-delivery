import React from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'

interface DeletePatientDialogProps {
    isOpen: boolean
    onClose: () => void
    patientName: string
    onDeletePatient: () => void
}

export function DeletePatientDialog({ isOpen, onClose, patientName, onDeletePatient }: DeletePatientDialogProps) {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Delete Patient</DialogTitle>
                    <DialogDescription>
                        Are you sure you want to delete the patient "{patientName}"? This action cannot be undone.
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <Button variant="outline" onClick={onClose}>Cancel</Button>
                    <Button variant="destructive" onClick={onDeletePatient}>Delete</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

