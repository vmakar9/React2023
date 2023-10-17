import {Simpson} from "./Simpson";

export function Simpsons(){

    const simpsons = [
        {
            id:1,
            name: 'Bart',
            surname: 'Simpson',
            age: 10,
            info: "Бартолом'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.",
            photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png',
        },
        {
            id:2,
            name: 'Homer',
            surname: 'Simpson',
            age: 40,
            info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
            photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png',
        },
        {
            id:3,
            name: 'Marge',
            surname: 'Simpson',
            age: 38,
            info: 'Марджорі Жаклін "Мардж" Сімпсон (у дівиці Бувє) (англ. Marjorie Jacqueline "Marge" Simpson) - постійний персонаж мультиплікаційного серіалу "Сімпсони", її озвучує Джулія Кавнер. Зазвичай носить зелену сукню, червоні балетки, на шиї — намисто зі штучних перлів і їздить помаранчевим універсалом. У неї шикарне синє волосся, яке вона зазвичай збирає в дуже високу зачіску.',
    photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png',
},
    {
        id:4,
        name: 'Lisa',
            surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героїня мультиплікаційного серіалу "Сімпсони". Середня дитина в сімї, восьмирічна дівчинка, що виділяється серед інших Сімпсонів насамперед своїм розумом і розважливістю.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png',
    },
    {
        id:5,
        name: 'Maggie',
            surname: 'Simpson',
        age: 1,
        info: 'Маргарет Евелін «Меґгі» Сімпсон (англ. Margaret Evelyn “Maggie” Simpson) —персонаж мультсеріалу "Сімпсони". Вперше зявилася на телебаченні в шоу Трейсі Ульман, в короткометражці Good Night (англ.) рос. 19 квітня 1987 року. Меггі була придумана і розроблена карикатуристом Меттом Грейнінгом, поки він чекав на зустріч з Джеймсом Л. Бруксом. Названа на честь молодшої сестри Грейнінга.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png',
    },
]

return(<div>
        {simpsons.map(simpson=><Simpson  key={simpson.id} simpson={simpson}/>)}
</div>)

}