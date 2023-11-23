let nome = 'Roger'
let Nxp = 100000
let Elo =["Ferro","Bronze", "Prata", "Ouro", "Platina", "Ascendente", "Imortal", "Radiante"]

if (Nxp > 0 && Nxp < 1100){
    console.log(`o heroi ${nome} está com ${Nxp} de XP total e atualmente está no Elô ${Elo[0]}`)
} else if (Nxp > 1101 && Nxp < 2000){
    console.log(`o heroi ${nome} está com ${Nxp} de XP total e atualmente está no Elô ${Elo[1]}`)
}else if (Nxp > 2001 && Nxp < 5000){
    console.log(`o heroi ${nome} está com ${Nxp} de XP total e atualmente está no Elô ${Elo[2]}`)
} else if (Nxp > 6001 && Nxp < 7000){
    console.log(`o heroi ${nome} está com ${Nxp} de XP total e atualmente está no Elô ${Elo[3]}`)
}else if (Nxp > 7001 && Nxp < 8000){
    console.log(`o heroi ${nome} está com ${Nxp} de XP total e atualmente está no Elô ${Elo[4]}`)
}else if (Nxp > 8001 && Nxp < 9000){
    console.log(`o heroi ${nome} está com ${Nxp} de XP total e atualmente está no Elô ${Elo[5]}`)
}else if (Nxp > 9001 && Nxp < 10000){
    console.log(`o heroi ${nome} está com ${Nxp} de XP total e atualmente está no Elô ${Elo[6]}`)
}else if (Nxp >= 10001){
    console.log(`o heroi ${nome} está com ${Nxp} de XP total e atualmente está no Elô ${Elo[7]}`)
}