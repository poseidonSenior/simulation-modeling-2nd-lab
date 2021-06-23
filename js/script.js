//Списко команд
//Индексы: 0 - название команды, 1 - забитые голы в первой игре, 2 - забитые голы во второй //игре, 3 - забитые голы в третьей игре, 4 - очки за игру, 5 - счетчик(используется внутри программы)
let team1 = ['Динамо', 0, 0, 0, 0, 0];
let team2 = ['Звезда', 0, 0, 0, 0, 0];
let team3 = ['Балтика', 0, 0, 0, 0, 0];
let team4 = ['Казанка', 0, 0, 0, 0, 0];
// let team5 = ['Муром', 0, 0, 0, 0];
// let team6 = ['Родина', 0, 0, 0, 0];
// let team7 = ['Салют', 0, 0, 0, 0];
// let team8 = ['Химки', 0, 0, 0, 0];

function sayRepeat() {
    alert('Давайте ПЕРЕИГРАЕМ! \nУ каких-то команд одинаковый счет');
}
function PoissonGenerator(lambda) {
    goals = 0;
    S = 0;
    while (true) {
        let re = Math.random();
        S += Math.log(re);
        if (S < -lambda)
            break;
        else
            goals++;
    }
    return goals;
}

//=======================================================================================================================
//Кнопка формирует список команд
document.querySelector('#b-1').onclick = foo_dreamTeam;
function foo_dreamTeam() {

    document.querySelector('#team-1').innerHTML = team1[0];
    document.querySelector('#team-2').innerHTML = team2[0];
    document.querySelector('#team-3').innerHTML = team3[0];
    document.querySelector('#team-4').innerHTML = team4[0];


    alert('Команды формируются! \nТеперь 1я команда играет с 2ой и 3я команда играет с 4й');
}
//=======================================================================================================================
//Рандомные значения забитых голов
team1[1] = PoissonGenerator(2);
team2[1] = PoissonGenerator(2);
team3[1] = PoissonGenerator(2);
team4[1] = PoissonGenerator(2);
//Формирование очков первой игры
arr_goal = [team1[1], team2[1], team3[1], team4[1]];
for (let gol = 0; gol < arr_goal.length; gol++) {
    switch (arr_goal[gol]) {
        case 0: if (arr_goal[0] == 0) { team1[4] = 0; }
            if (arr_goal[1] == 0) { team2[4] = 0; }
            if (arr_goal[2] == 0) { team3[4] = 0; }
            if (arr_goal[3] == 0) { team4[4] = 0; }
            break;

        case 1: if (arr_goal[0] == 1) { team1[4] = 10; }
            if (arr_goal[1] == 1) { team2[4] = 10; }
            if (arr_goal[2] == 1) { team3[4] = 10; }
            if (arr_goal[3] == 1) { team4[4] = 10; }
            break;

        case 2: if (arr_goal[0] == 2) { team1[4] = 20; }
            if (arr_goal[1] == 2) { team2[4] = 20; }
            if (arr_goal[2] == 2) { team3[4] = 20; }
            if (arr_goal[3] == 2) { team4[4] = 20; }
            break;

        case 3: if (arr_goal[0] == 3) { team1[4] = 30; }
            if (arr_goal[1] == 3) { team2[4] = 30; }
            if (arr_goal[2] == 3) { team3[4] = 30; }
            if (arr_goal[3] == 3) { team4[4] = 30; }
            break;

        case 4: if (arr_goal[0] == 4) { team1[4] = 40; }
            if (arr_goal[1] == 4) { team2[4] = 40; }
            if (arr_goal[2] == 4) { team3[4] = 40; }
            if (arr_goal[3] == 4) { team4[4] = 40; }
            break;

        case 5: if (arr_goal[0] == 5) { team1[4] = 50; }
            if (arr_goal[1] == 5) { team2[4] = 50; }
            if (arr_goal[2] == 5) { team3[4] = 50; }
            if (arr_goal[3] == 5) { team4[4] = 50; }
            break;

        case 6: if (arr_goal[0] == 6) { team1[4] = 60; }
            if (arr_goal[1] == 6) { team2[4] = 60; }
            if (arr_goal[2] == 6) { team3[4] = 60; }
            if (arr_goal[3] == 6) { team4[4] = 60; }
            break;

        case 7: if (arr_goal[0] == 7) { team1[4] = 70; }
            if (arr_goal[1] == 7) { team2[4] = 70; }
            if (arr_goal[2] == 7) { team3[4] = 70; }
            if (arr_goal[3] == 7) { team4[4] = 70; }
            break;

        case 8: if (arr_goal[0] == 8) { team1[4] = 80; }
            if (arr_goal[1] == 8) { team2[4] = 80; }
            if (arr_goal[2] == 8) { team3[4] = 80; }
            if (arr_goal[3] == 8) { team4[4] = 80; }
            break;

        case 9: if (arr_goal[0] == 9) { team1[4] = 90; }
            if (arr_goal[1] == 9) { team2[4] = 90; }
            if (arr_goal[2] == 9) { team3[4] = 90; }
            if (arr_goal[3] == 9) { team4[4] = 90; }
            break;

        case 10: if (arr_goal[0] == 10) { team1[4] = 100; }
            if (arr_goal[1] == 10) { team2[4] = 100; }
            if (arr_goal[2] == 10) { team3[4] = 100; }
            if (arr_goal[3] == 10) { team4[4] = 100; }
            break;
    }
}
arr_score = [team1[4], team2[4], team3[4], team4[4]];

//Кнопка запускает первую игру
document.querySelector('#b-2').onclick = playGame_1st;
function playGame_1st() {
    this.disabled = 'disabled';
    //___________________ 1 и 2 команда ___________________ 
    document.querySelector('.score_1_1').innerHTML = team1[1];
    document.querySelector('.score_1_3').innerHTML = team1[4];

    document.querySelector('.score_2_1').innerHTML = team2[1];
    document.querySelector('.score_2_3').innerHTML = team2[4];

    if (team1[4] > team2[4]) {
        document.querySelector('.score_2_1').style.background = 'rgba(255, 0, 0, 0.5)';
        document.querySelector('.score_2_2').style.background = 'rgba(255, 0, 0, 0.5)';
        document.querySelector('.score_2_3').style.background = 'rgba(255, 0, 0, 0.5)';
        document.querySelector('#team-2').style.background = 'rgba(255, 0, 0, 0.5)';
    }
    else if (team1[4] < team2[4]) {
        document.querySelector('.score_1_1').style.background = 'rgba(255, 0, 0, 0.5)';
        document.querySelector('.score_1_2').style.background = 'rgba(255, 0, 0, 0.5)';
        document.querySelector('.score_1_3').style.background = 'rgba(255, 0, 0, 0.5)';
        document.querySelector('#team-1').style.background = 'rgba(255, 0, 0, 0.5)';
    }
    else if (team1[4] == team2[4]) {
        document.querySelector('.score_1_1').style.background = 'rgba(255, 180, 0, 0.5)';
        document.querySelector('.score_1_2').style.background = 'rgba(255, 180, 0, 0.5)';
        document.querySelector('.score_1_3').style.background = 'rgba(255, 180, 0, 0.5)';
        document.querySelector('#team-1').style.background = 'rgba(255, 180, 0, 0.5)';

        document.querySelector('.score_2_1').style.background = 'rgba(255, 180, 0, 0.5)';
        document.querySelector('.score_2_2').style.background = 'rgba(255, 180, 0, 0.5)';
        document.querySelector('.score_2_3').style.background = 'rgba(255, 180, 0, 0.5)';
        document.querySelector('#team-2').style.background = 'rgba(255, 180, 0, 0.5)';

        setTimeout(sayRepeat, 1000);
        // alert('Давайте ПЕРЕИГРАЕМ! \nУ каких-то команд одинаковый счет');
    }

    //___________________ 3 и 4 команда ___________________ 
    document.querySelector('.score_3_1').innerHTML = team3[1];
    document.querySelector('.score_3_3').innerHTML = team3[4];

    document.querySelector('.score_4_1').innerHTML = team4[1];
    document.querySelector('.score_4_3').innerHTML = team4[4];

    if (team3[4] > team4[4]) {
        document.querySelector('.score_4_1').style.background = 'rgba(255, 0, 0, 0.5)';
        document.querySelector('.score_4_2').style.background = 'rgba(255, 0, 0, 0.5)';
        document.querySelector('.score_4_3').style.background = 'rgba(255, 0, 0, 0.5)';
        document.querySelector('#team-4').style.background = 'rgba(255, 0, 0, 0.5)';
    }
    else if (team3[4] < team4[4]) {
        document.querySelector('.score_3_1').style.background = 'rgba(255, 0, 0, 0.5)';
        document.querySelector('.score_3_2').style.background = 'rgba(255, 0, 0, 0.5)';
        document.querySelector('.score_3_3').style.background = 'rgba(255, 0, 0, 0.5)';
        document.querySelector('#team-3').style.background = 'rgba(255, 0, 0, 0.5)';
    }
    else if (team3[4] == team4[4]) {
        document.querySelector('.score_3_1').style.background = 'rgba(255, 180, 0, 0.5)';
        document.querySelector('.score_3_2').style.background = 'rgba(255, 180, 0, 0.5)';
        document.querySelector('.score_3_3').style.background = 'rgba(255, 180, 0, 0.5)';
        document.querySelector('#team-3').style.background = 'rgba(255, 180, 0, 0.5)';

        document.querySelector('.score_4_1').style.background = 'rgba(255, 180, 0, 0.5)';
        document.querySelector('.score_4_2').style.background = 'rgba(255, 180, 0, 0.5)';
        document.querySelector('.score_4_3').style.background = 'rgba(255, 180, 0, 0.5)';
        document.querySelector('#team-4').style.background = 'rgba(255, 180, 0, 0.5)';

        setTimeout(sayRepeat, 1000);
        // alert('Давайте ПЕРЕИГРАЕМ! \nУ каких-то команд одинаковый счет');
    }


}

//=======================================================================================================================
//Кнопка запускает вторую игру
document.querySelector('#b-3').onclick = playGame_2nd;
function playGame_2nd() {
    this.disabled = 'disabled';
    // console.log(team1[4]);
    // console.log(team2[4]);
    // console.log(team3[4]);
    // console.log(team4[4]);

    if (team1[4] > team2[4] && team3[4] > team4[4]) {
        team1[2] = PoissonGenerator(2);
        switch (team1[2]) {
            case 0: team1[4] = 0;
                break;

            case 1: team1[4] += 10;
                break;

            case 2: team1[4] += 20;
                break;

            case 3: team1[4] += 30;
                break;

            case 4: team1[4] += 40;
                break;

            case 5: team1[4] += 50;
                break;

            case 6: team1[4] += 60;
                break;

            case 7: team1[4] += 70;
                break;

            case 8: team1[4] += 80;
                break;

            case 9: team1[4] += 90;
                break;

            case 10: team1[4] += 100;
                break;
        }
        document.querySelector('.score_1_2').innerHTML = team1[2];
        document.querySelector('.score_1_3').innerHTML = team1[4];

        team3[2] = PoissonGenerator(2);
        switch (team3[2]) {
            case 0: team3[4] = 0;
                break;

            case 1: team3[4] += 10;
                break;

            case 2: team3[4] += 20;
                break;

            case 3: team3[4] += 30;
                break;

            case 4: team3[4] += 40;
                break;

            case 5: team3[4] += 50;
                break;

            case 6: team3[4] += 60;
                break;

            case 7: team3[4] += 70;
                break;

            case 8: team3[4] += 80;
                break;

            case 9: team3[4] += 90;
                break;

            case 10: team3[4] += 100;
                break;
        }
        document.querySelector('.score_3_2').innerHTML = team3[2];
        document.querySelector('.score_3_3').innerHTML = team3[4];

        if (team1[4] > team3[4]) {
            document.querySelector('.score_1_1').style.background = 'rgba(0, 255, 0, 0.5)';
            document.querySelector('.score_1_2').style.background = 'rgba(0, 255, 0, 0.5)';
            document.querySelector('.score_1_3').style.background = 'rgba(0, 255, 0, 0.5)';
            document.querySelector('#team-1').style.background = 'rgba(0, 255, 0, 0.5)';

            document.querySelector('.win').innerHTML = 'Победила Динамо';
        }
        else if (team1[4] < team3[4]) {
            document.querySelector('.score_3_1').style.background = 'rgba(0, 255, 0, 0.5)';
            document.querySelector('.score_3_2').style.background = 'rgba(0, 255, 0, 0.5)';
            document.querySelector('.score_3_3').style.background = 'rgba(0, 255, 0, 0.5)';
            document.querySelector('#team-3').style.background = 'rgba(0, 255, 0, 0.5)';

            document.querySelector('.win').innerHTML = 'Победила Балтика';
        }
        else if (team1[4] == team3[4]) {

            document.querySelector('.win').innerHTML = 'НИЧЬЯ';
        }

        // console.log('Выиграла Динамо-Балтика');
    }
    else if (team1[4] > team2[4] && team3[4] < team4[4]) {
        team1[2] = PoissonGenerator(2);
        switch (team1[2]) {
            case 0: team1[4] = 0;
                break;

            case 1: team1[4] += 10;
                break;

            case 2: team1[4] += 20;
                break;

            case 3: team1[4] += 30;
                break;

            case 4: team1[4] += 40;
                break;

            case 5: team1[4] += 50;
                break;

            case 6: team1[4] += 60;
                break;

            case 7: team1[4] += 70;
                break;

            case 8: team1[4] += 80;
                break;

            case 9: team1[4] += 90;
                break;

            case 10: team1[4] += 100;
                break;
        }
        document.querySelector('.score_1_2').innerHTML = team1[2];
        document.querySelector('.score_1_3').innerHTML = team1[4];

        team4[2] = PoissonGenerator(2);
        switch (team4[2]) {
            case 0: team4[4] = 0;
                break;

            case 1: team4[4] += 10;
                break;

            case 2: team4[4] += 20;
                break;

            case 3: team4[4] += 30;
                break;

            case 4: team4[4] += 40;
                break;

            case 5: team4[4] += 50;
                break;

            case 6: team4[4] += 60;
                break;

            case 7: team4[4] += 70;
                break;

            case 8: team4[4] += 80;
                break;

            case 9: team4[4] += 90;
                break;

            case 10: team4[4] += 100;
                break;
        }
        document.querySelector('.score_4_2').innerHTML = team4[2];
        document.querySelector('.score_4_3').innerHTML = team4[4];

        if (team1[4] > team4[4]) {
            document.querySelector('.score_1_1').style.background = 'rgba(0, 255, 0, 0.5)';
            document.querySelector('.score_1_2').style.background = 'rgba(0, 255, 0, 0.5)';
            document.querySelector('.score_1_3').style.background = 'rgba(0, 255, 0, 0.5)';
            document.querySelector('#team-1').style.background = 'rgba(0, 255, 0, 0.5)';

            document.querySelector('.win').innerHTML = 'Победила Динамо';
        }
        else if (team1[4] < team4[4]) {
            document.querySelector('.score_4_1').style.background = 'rgba(0, 255, 0, 0.5)';
            document.querySelector('.score_4_2').style.background = 'rgba(0, 255, 0, 0.5)';
            document.querySelector('.score_4_3').style.background = 'rgba(0, 255, 0, 0.5)';
            document.querySelector('#team-4').style.background = 'rgba(0, 255, 0, 0.5)';

            document.querySelector('.win').innerHTML = 'Победила Казанка';
        }
        else if (team1[4] == team4[4]) {

            document.querySelector('.win').innerHTML = 'НИЧЬЯ';
        }

        // console.log('Выиграла Динамо-Казанка');
    }
    else if (team1[4] < team2[4] && team3[4] > team4[4]) {
        team2[2] = PoissonGenerator(2);
        switch (team2[2]) {
            case 0: team2[4] = 0;
                break;

            case 1: team2[4] += 10;
                break;

            case 2: team2[4] += 20;
                break;

            case 3: team2[4] += 30;
                break;

            case 4: team2[4] += 40;
                break;

            case 5: team2[4] += 50;
                break;

            case 6: team2[4] += 60;
                break;

            case 7: team2[4] += 70;
                break;

            case 8: team2[4] += 80;
                break;

            case 9: team2[4] += 90;
                break;

            case 10: team2[4] += 100;
                break;
        }
        document.querySelector('.score_2_2').innerHTML = team2[2];
        document.querySelector('.score_2_3').innerHTML = team2[4];

        team3[2] = PoissonGenerator(2);
        switch (team3[2]) {
            case 0: team3[4] = 0;
                break;

            case 1: team3[4] += 10;
                break;

            case 2: team3[4] += 20;
                break;

            case 3: team3[4] += 30;
                break;

            case 4: team3[4] += 40;
                break;

            case 5: team3[4] += 50;
                break;

            case 6: team3[4] += 60;
                break;

            case 7: team3[4] += 70;
                break;

            case 8: team3[4] += 80;
                break;

            case 9: team3[4] += 90;
                break;

            case 10: team3[4] += 100;
                break;
        }
        document.querySelector('.score_3_2').innerHTML = team3[2];
        document.querySelector('.score_3_3').innerHTML = team3[4];

        if (team2[4] > team3[4]) {
            document.querySelector('.score_2_1').style.background = 'rgba(0, 255, 0, 0.5)';
            document.querySelector('.score_2_2').style.background = 'rgba(0, 255, 0, 0.5)';
            document.querySelector('.score_2_3').style.background = 'rgba(0, 255, 0, 0.5)';
            document.querySelector('#team-2').style.background = 'rgba(0, 255, 0, 0.5)';

            document.querySelector('.win').innerHTML = 'Победила Звезда';
        }
        else if (team2[4] < team3[4]) {
            document.querySelector('.score_3_1').style.background = 'rgba(0, 255, 0, 0.5)';
            document.querySelector('.score_3_2').style.background = 'rgba(0, 255, 0, 0.5)';
            document.querySelector('.score_3_3').style.background = 'rgba(0, 255, 0, 0.5)';
            document.querySelector('#team-3').style.background = 'rgba(0, 255, 0, 0.5)';

            document.querySelector('.win').innerHTML = 'Победила Балтика';
        }
        else if (team2[4] == team3[4]) {

            document.querySelector('.win').innerHTML = 'НИЧЬЯ';
        }
        // console.log('Выиграла Звезда-Балтика');
    }
    else if (team1[4] < team2[4] && team3[4] < team4[4]) {
        team2[2] = PoissonGenerator(2);
        switch (team2[2]) {
            case 0: team2[4] = 0;
                break;

            case 1: team2[4] += 10;
                break;

            case 2: team2[4] += 20;
                break;

            case 3: team2[4] += 30;
                break;

            case 4: team2[4] += 40;
                break;

            case 5: team2[4] += 50;
                break;

            case 6: team2[4] += 60;
                break;

            case 7: team2[4] += 70;
                break;

            case 8: team2[4] += 80;
                break;

            case 9: team2[4] += 90;
                break;

            case 10: team2[4] += 100;
                break;
        }
        document.querySelector('.score_2_2').innerHTML = team2[2];
        document.querySelector('.score_2_3').innerHTML = team2[4];

        team4[2] = PoissonGenerator(2);
        switch (team4[2]) {
            case 0: team4[4] = 0;
                break;

            case 1: team4[4] += 10;
                break;

            case 2: team4[4] += 20;
                break;

            case 3: team4[4] += 30;
                break;

            case 4: team4[4] += 40;
                break;

            case 5: team4[4] += 50;
                break;

            case 6: team4[4] += 60;
                break;

            case 7: team4[4] += 70;
                break;

            case 8: team4[4] += 80;
                break;

            case 9: team4[4] += 90;
                break;

            case 10: team4[4] += 100;
                break;
        }
        document.querySelector('.score_4_2').innerHTML = team4[2];
        document.querySelector('.score_4_3').innerHTML = team4[4];

        if (team2[4] > team4[4]) {
            document.querySelector('.score_2_1').style.background = 'rgba(0, 255, 0, 0.5)';
            document.querySelector('.score_2_2').style.background = 'rgba(0, 255, 0, 0.5)';
            document.querySelector('.score_2_3').style.background = 'rgba(0, 255, 0, 0.5)';
            document.querySelector('#team-2').style.background = 'rgba(0, 255, 0, 0.5)';

            document.querySelector('.win').innerHTML = 'Победила Звезда';
        }
        else if (team2[4] < team4[4]) {
            document.querySelector('.score_4_1').style.background = 'rgba(0, 255, 0, 0.5)';
            document.querySelector('.score_4_2').style.background = 'rgba(0, 255, 0, 0.5)';
            document.querySelector('.score_4_3').style.background = 'rgba(0, 255, 0, 0.5)';
            document.querySelector('#team-4').style.background = 'rgba(0, 255, 0, 0.5)';

            document.querySelector('.win').innerHTML = 'Победила Казанка';
        }
        else if (team2[4] == team4[4]) {

            document.querySelector('.win').innerHTML = 'НИЧЬЯ';
        }

        // console.log('Выиграла Звезда-Казанка');
    }
}


