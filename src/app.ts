/*
* File: app.ts
* Author: Kiss Cintia
* Copyright: 2024, Kiss Cintia
* Group: Szoft I-2-N
* Date: 2024-05-30
* Github: https://github.com/KissCintia/
* Licenc: GNU GPL
*/

class Atlos{
    aSide?: HTMLInputElement | null
    bSide?: HTMLInputElement | null
    diagonal?: HTMLInputElement | null
    calcButton?: HTMLButtonElement | null


    constructor(){
        this.connectHtml()
        this.handleEvent()
    }

    connectHtml(){
        this.aSide = document.querySelector('#aSide')
        this.bSide = document.querySelector('#bSide')
        this.diagonal = document.querySelector('#diagonal')
        this.calcButton = document.querySelector('#calcButton')
    }
    
    handleEvent(){
        this.calcButton?.addEventListener('click', () => {
            this.startCalc()
        })
    }
    startCalc(){
        const aSide = Number(this.aSide?.value)
        const bSide = Number(this.bSide?.value)
        const diagonal = this.calcDiagonal(aSide, bSide)
        this.diagonal!.value = String(diagonal)
    }
    calcDiagonal(aSide: number, bSide: number): number{
        return Math.sqrt(Math.pow(aSide, 2) + Math.pow(bSide, 2))
    }
}

new Atlos()