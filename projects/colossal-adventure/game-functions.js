var ask = require('readline-sync');

var items = [{name = `Sword of ${player.name}'s ancestors`, aMod = 10, entrance = `
                (_)
               (___)
               (___)
               (___)
               (___)
    /\_____/\__/----\__/\_____/\
    \_____\_°_¤ ---- ¤_°_/____/
             \ __°__ /
              |\_°_/|
              [|\_/|]
              [|[¤]|]
              [|;¤;|]
              [;;¤;;]
             ;[|;¤]|]\
            ;;[|;¤]|]-\
           ;;;[|[o]|]--\
          ;;;;[|[o]|]---\
         ;;;;;[|[o]|]|---|
         ;;;;;[|[o]|]|---|
          ;;;;[|[o]|/---/
           ;;;[|[o]/---/
            ;;[|[]/---/
             ;[|[/---/
              [|/---/
               /---/
              /---/|]
             /---/]|];
            /---/#]|];;
           |---|[#]|];;;
           |---|[#]|];;;
            \--|[#]|];;
             \-|[#]|];
              \|[#]|]
               \\#//
                \/

`}, ]

var lionTamer = {attack = 30, health = 100, entrance = `
                  ,#####,
                  #_   _#
                  |e` `e|
                  |  u  |
                  \  =  /
                  |\___/|
         ___ ____/:     :\____ ___
       .'   '.-===-\   /-===-.'   '.
      /      .-"""""-.-"""""-.      \
     /'             =:=             '\
   .'  ' .:    o   -=:=-   o    :. '  '.
   (.'   /'. '-.....-'-.....-' .'\   '.)
   /' ._/   ".     --:--     ."   \_. '\
  |  .'|      ".  ---:---  ."      |'.  |
  |  : |       |  ---:---  |       | :  |
   \ : |       |_____._____|       | : /
   /   (       |----|------|       )   \ 
  /... .|      |    |      |      |. ...\
 |::::/'' jgs /     |       \     ''\::::|
 '""""       /'    .L_      '\       """"'
            /'-.,__/` `\__..-'\
           ;      /     \      ;
           :     /       \     |
           |    /         \.   |
           |'../           |  ,/
           ( _ )           |  _)
           |   |           |   |
           |___|           \___|
           :===|            |==|
            \  /            |__|
            /\/\           /"""'8.__
            |oo|           \__.//___)
            |==|
            \__/

`};

var ememiesList = [
    {name ='Lion', attack = 20, health = 50, aMod = 0, dMod = 0, entrance = `
               ,aodObo,
        ,AMMMMP~~~~
     ,MMMMMMMMA.
   ,M;'     'YV'
  AM' ,OMA,
 AM|   '~VMM,.      .,ama,____,amma,..
 MML      )MMMD   .AMMMMMMMMMMMMMMMMMMD.
 VMMM    .AMMY'  ,AMMMMMMMMMMMMMMMMMMMMD
 'VMM, AMMMV'  ,AMMMMMMMMMMMMMMMMMMMMMMM,                ,
  VMMMmMMV'  ,AMY~~''  'MMMMMMMMMMMM' '~~             ,aMM
  'YMMMM'   AMM'        'VMMMMMMMMP'_              A,aMMMM
   AMMM'    VMMA. YVmmmMMMMMMMMMMML MmmmY          MMMMMMM
  ,AMMA   _,HMMMMmdMMMMMMMMMMMMMMMML'VMV'         ,MMMMMMM
  AMMMA _'MMMMMMMMMMMMMMMMMMMMMMMMMMA '          MMMMMMMM
 ,AMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMa      ,,,   'MMMMMMM
 AMMMMMMMMM'~'YMMMMMMMMMMMMMMMMMMMMMMA    ,AMMV    MMMMMMM
 VMV MMMMMV   'YMMMMMMMMMMMMMMMMMMMMMY   'VMMY'  adMMMMMMM
 'V  MMMM'      'YMMMMMMMV.~~~~~~~~~,aado,'V''   MMMMMMMMM
    aMMMMmv       'YMMMMMMMm,    ,/AMMMMMA,      YMMMMMMMM
    VMMMMM,,v       YMMMMMMMMMo oMMMMMMMMM'    a, YMMMMMMM
    'YMMMMMY'       'YMMMMMMMY' 'YMMMMMMMY     MMmMMMMMMMM
     AMMMMM  ,        ~~~~~,aooooa,~~~~~~      MMMMMMMMMMM
       YMMMb,d'         dMMMMMMMMMMMMMD,   a,, AMMMMMMMMMM
        YMMMMM, A       YMMMMMMMMMMMMMY   ,MMMMMMMMMMMMMMM
       AMMMMMMMMM        '~~~~'  '~~~~'   AMMMMMMMMMMMMMMM
       'VMMMMMM'  ,A,                  ,,AMMMMMMMMMMMMMMMM
     ,AMMMMMMMMMMMMMMA,       ,aAMMMMMMMMMMMMMMMMMMMMMMMMM
   ,AMMMMMMMMMMMMMMMMMMA,    AMMMMMMMMMMMMMMMMMMMMMMMMMMMM
 ,AMMMMMMMMMMMMMMMMMMMMMA   AMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
AMMMMMMMMMMMMMMMMMMMMMMMMAaAMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
    `},
    {name ='Bandit', attack = 18, health = 40, aMod = 0, dMod = 0, entrance = `
                 \\\\\//////
                \\\\\\//////
               [[[[[[[]]]]]]]]
               /////////\\\\\\
       /\     //// ~0 ( 0~ \\\\
      /  \    //(,  8-_\-8 ,)\\ 
     /    \    //|\ .===. /|\\
     |/||\|       \ '===' /*
       ||          \__.__/
    _.=||=._   .---'@   @'---.
    /| || |\  /     '@ @'     \
      _||_   /    .   Y   .  _/\
     /  _))-'  /|'---{@}---'|\_/\
     |  _)  _.' |   --:--   | \  \
     \___)-'    |   --:--   |  \  \
       ||       ;   --:--   ;  /  /
       ||        \____.____/  /  /
       ||      .{{{{{{{{}}}}}/ /'
       ||      {{{{{{{{{{{{{}} |
       ||      {}}}}}}}}}}}}}}_/
       ||      {{{{{{{{{{{{{{}  
       ||      {}}}}}}}}}}}}}}
       ||      '{}}}}}}}}}}}}'
       ||         |   |   |
       ||         |   |   |
       ||         |   |   |
       ||         |   |   |
       ||         |'-'|'-'|
       ||         |   |   |
       ||         |   |   |
       ||         |___|   |
       ||         (___)   }
       ||         /   |   \
       ||        (oooO Oooo)

    `},
    {name ='Crocodile', attack = 10, health = 25, aMod = 0, dMod = 0, entrance = `
                                                 ___.-----.______
                                   ___.-----'::::::::::::::::'---.___
                _.--._            (:::;,-----'~~~~~'----::::::::::.. '-.
   _          .'_---. '--.__       '~~'                 '~'--.:::::'..  '..
  ; '-.____.-' ' {0} '' '--._'---.____                         ':::::::: : ::
 :_^              ~   '--.___ '----.__'----.____                ~::::::.';':
  :'--.__,-----.___(         '---.___ '---.___  '----.___         ~|;:,' : |
   '-.___,---.____     _,        ._  '----.____ '----.__ '-----.___;--'  ; :
                  '---' '.  '._    ''))  ,  , , '----.____.----.____   --' :|
                        / ',--.\    '.'' '  ' ' ,   ,  ,     _.--   '-----'|'
 _.~~~~~~._____    __./'_/'     :   .:----.___ ' ' ' ''  .-'      , ,  :::'
                 ///--\;  ____  :   :'    ____'---.___.--::     , ' ' ::'
                 ''           _.'   (    /______     (   '-._   '-._,-'
    ()  ()                 .-' __.-//     /_______---'       '-._   '.
  * *(o)'      ~~~        /////    '       ~~~~~~      ~~ ______;   ::.
  '\ )( /*                '''                            /_______   _.'
    {()}      ,     ~~~                  ~~~~~~~~           /___.---'  --__
     !|       '                                              ~~~
  ~~~~~~~~
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 `},
    {name ='Tiger' , attack = 12, health = 30, aMod = 0, dMod = 0, entrance = `${
           ,''',
         .' ., .',                                  ../'''',
        .'. %%, %.',                            .,/' .,%   :
       .'.% %%%,`%%%'.    .....,,,,,,.....   .,%%% .,%%'. .'
       : %%% %%%%%%',:%%>>%>' .,>>%>>%>%>>%%>,.   `%%%',% :
       : %%%%%%%'.,>>>%'   .,%>%>%'.,>%>%' . `%>>>,. `%%%:'
       ` %%%%'.,>>%'  .,%>>%>%' .,%>%>%' .>>%,. `%%>>,. `%
        `%'.,>>>%'.,%%%%%%%' .,%%>%%>%' >>%%>%>>%.`%% %% `,
        ,`%% %%>>>%%%>>%%>%%>>%>>%>%%%  %%>%%>%%>>%>%%%' % %,
      ,%>%'.>>%>%'%>>%%>%%%%>%'                 `%>%>>%%.`%>>%.
    ,%%>' .>%>%'.%>%>>%%%>>%' ,%%>>%%>%>>%>>%>%%,.`%%%>%%. `%>%.
   ` ,%' .>%%%'.%>%>>%' .,%%%%%%%%'          `%%%%%%.`%%>%% .%%>
   .%>% .%%>' :%>>%%'.,%%%%%%%%%'.%%%%%' `%%%%.`%%%%%.%%%%> %%>%.
  ,%>%' >>%%  >%' `%%%%'     `%%%%%%%'.,>,. `%%%%'     `%%%>>%%>%
.%%>%' .%%>'  %>>%, %% oO ~ Oo %%%>>'.>>>>>>. `% oO ~ Oo'.%%%'%>%,
%>'%> .%>%>%  %%>%%%'  `OoooO'.%%>>'.>>>%>>%>>.`%`OoooO'.%%>% '%>%
%',%' %>%>%'  %>%>%>% .%,>,>,   `>'.>>%>%%>>>%>.`%,>,>' %%%%> .>%>,
` %>% `%>>%%. `%%% %' >%%%%%%>,  ' >>%>>%%%>%>>> >>%%' ,%%>%'.%%>>%.
 .%%'  %%%%>%.   `>%%. %>%%>>>%.>> >>>%>%%%%>%>>.>>>'.>%>%>' %>>%>%%
 `.%%  `%>>%%>    %%>%  %>>>%%%>>'.>%>>>>%%%>>%>>.>',%>>%'  ,>%'>% '
  %>'  %%%%%%'    `%%'  %%%%%> >' >>>>%>>%%>>%>>%> %%>%>' .%>%% .%%
 %>%>, %>%%>>%%,  %>%>% `%%  %>>  >>>%>>>%%>>>>%>>  %%>>,%>%%'.%>%,
%>%>%%, `%>%%>%>%, %>%%> ,%>%>>>.>>`.,.  `"   ..'>.%. % %>%>%'.%>%%;
%'`%%>%  %%>%%  %>% %'.>%>>%>%%>>%::.  `,   /' ,%>>>%>. >%>%'.%>%'%'
` .%>%'  >%%% %>%%'.>%>%;''.,>>%%>%%::.  ..'.,%>>%>%>,`%  %'.>%%' '
  %>%>%% `%>  >%%'.%%>%>>%>%>%>>>%>%>>%,,::,%>>%%>%>>%>%% `>>%>'
  %'`%%>%>>%  %>'.%>>%>%>>;'' ..,,%>%>%%/::%>%%>>%%,,.``% .%>%%
  `    `%>%>>%%' %>%%>>%>>%>%>%>%%>%/'       `%>%%>%>>%%% ' .%'
        %'  `%>% `%>%%;'' .,>>%>%/',;;;;;,;;;;,`%>%>%,`%'   '
        `    `  ` `%>%%%>%%>%%;/ @a;;;;;;;;;;;a@  >%>%%'
                   `/////////';, `@a@@a@@a@@aa@',;`//'
                      `//////.;;,,............,,;;//'
                          `////;;;;;;;;;;;;;;;;;/'
                             `/////////////////'`
}`},
    {name ='Wolf', attack = 5, health = 20, aMod = 0, dMod = 0 entrance = `
    /^\      /^\
    |  \    /  |
    ||\ \../ /||
    )'        '(
   ,;'w,    ,w';,
   ;,  ) __ (  ,;
    ;  \(\/)/  ;;
   ;|  |vwwv|    ''-...
    ;  'lwwl'   ;      ''''-.
   ;| ; ''""' ; ;              '.
    ;         ,   ,          , |
    '  ;      ;   l    .     | |
    ;    ,  ,    |,-,._|      \;
     ;  ; ' ;   '    \ '\     \;
     |  |    |  |     |   |    |;
     |  ;    ;  |      \   \   (;
     | |      | l       | | \  |
     | |      | |  pb   | |  ) |
     | |      | ;       | |  | |
     ; ,      : ,      ,_.'  | |
    :__'      | |           ,_.'
             '--'
 `},
    {name ='Giant Snake', attack = 8, health = 15, aMod = 0, dMod = 0, entrance = `
    ---_ ...... _/_ -    
    /  .      ./ .'*\ \    
    : '         /__-'   \. 
   /                      )
 _/                  >   .' 
/   .   .       _.-" /  .'   
\           __/"     /.'/|   
 \ '--  .-" /     //' |\|  
  \|  \ | /     //_ _ |/|
   '.  \:     //|_ _ _|\|
   | \/.    //  | _ _ |/| 
    \_ | \/ /    \ _ _ \\\ 
        \__/      \ _ _ \|\
    `},
    {name ='Bear', attack = 15, health = 35, aMod = 0, dMod = 0, entrance = `
    	
                             _.--""""--.._
                         _.""    .'       '-._
                       .";      ;           ; '-.
                      / /     .'           ;     `.
                     / ;     ;             ;       \
                    ; :      :             :     '-.\
                    ; ;      :              `.      ';
                    : :      :                \      :
                    : \      ':                \   '.;
                     \ \      ';                ;    ;
                      \ : .'   ;                |   ;
                       '>'     :              '.;   )
                       / _.'               '.  ;/ _(
                      ;,'     ;    `.        '.;    `-.
                     ;' .'   :    `. `.       / \, \ \ \
                     :,'     :      `. `. \  ; ::\_/_/_/::
                   .-=:.-"  -,-   "-.,=-.\ ;.; :::; ; ;::
                   |('.'     :       .')| \: `.  :::::::
                    \\/      :       \//   ;   \              _____
                     :      .:.       :  _/     ;             \   :
           /         ;                ;  ;      |              \"""
         .'          :    _     _    ;  /       ;              /|
        /             '.  \;   ;/  .' .'       /              /:|
       |                !  :   :  !_.'        /           .--::/
       |\___             `.:   :.'/\         ;      ____.':|:|/
       \:::|\              \ _ /  | :       :   ___/|:::|:'"""
        '""|:\             ;"^"   | !       :__/|::|/""""
           \::\_____     .-'      | ;       |::|/""
            \:|::::|\   / / /    / /       /"""
             \|::::|:'--\_\_\__.'-|       ;
               """" \::::::::::::/      .'
                     """"'"""".-'      (
              __,------.__.--/ , ,  , |/--._
             /              :\|  |  |v'     \_
            |\              :::v-;v-'::       \
            \:\              :::::::::         \
             \|'-.                             /|
               ': \          ____         ____/:/
                 \|:-.______/|::|\       /|:::|/
                  |::|:::::|:/"""\\_____/:/""""
                  '-:|:::::|/     \|::::|/
                     '"""""'       '""""'
`},
    {name ='Wild Boar', attack = 3, health = 10, aMod = 0, dMod = 0, entrance = `
    |\     /|
    \ )_ _( /
     /     \  , - - - - - 6
    (  . .  )              \
    (  ___  )               \
    =\(o o)/=               \
     ( ~~~     _ _ _ _ .,/  /
     \    \   \       ( (   \
      \  / \  /        \ \  /
       vv   vv          v vv
`},
]
var enemy = "";

var player ={
    attack = 5,
    defense = 0,
    aMod = 1,
    dMod = 0,
    health = 100,
    items = [],
}

function walk(){

    console.log(`
                Oooo
               (----)
                )--/
                (_/
        oooO
        (---)
         \--(
          \_)
                Oooo
               (----)
                )--/
                (_/
        oooO
        (---)
         \--(
          \_)
    `);

    wait(2)
    var encounter = Math.floor(Math.random()*100);
    if(encounter< 25){
        fight();
    } else if(encounter > 95){
        find();
    }


}

function run(){
    var runaway = Math.floor(Math.random()*2)
    if(runaway === 1){
        var damage = Math.floor(MAth.random()*enemy.attack);
        player.health-=damage;
        console.log(`The ${enemy} damages you ${damage} as you flee.`)
        return true;
    } else{
        Console.log(`The ${enemy} catches up to you.`)
        return false;}

}

function fight(){
    var fightEnd = false;
    var random = Math.floor(Math.random()*enemiesList.length);
    enemy = enemiesList[random].name;
    console.log(enemy.entrance);
    wait(1);
    console.log(`A ${enemy} appears.`)
    do{
        var choice = ask.keyInSelect(["Fight", "Run"], `\n`);
        if(choice === "Fight"){attackEnemy(enemiesList[random]);}
        else{fightEnd = run();}
    }while(!fightEnd || player.health<=0)

}

function attackEnemy(enmy){
    pAttack = Math.floor((Math.random()*attack)+aMod)
    enmy.health-=pAttack;
    if(enmy.health>0){
        player.health-=(Math.max(0,(Math.floor((Math.random()*enmy.attack) - player.defense)));
        return false;
    }else{
        return true;
    }

}

function win(){
    Console.log(`"I done it."`);
    wait(2);
    console.log(`"I've avenged my family."`);
    wait(2);
    console.log(`
    _______ad88888888888888888888888a, 
________a88888"8888888888888888888888, 
______,8888"__"P88888888888888888888b, 
______d88_________'""P88888888888888888, 
_____,8888b_______________""88888888888888, 
_____d8P'''__,aa,______________""888888888b 
_____888bbdd888888ba,__,I_________"88888888, 
_____8888888888888888ba8"_________,88888888b 
____,888888888888888888b,________,8888888888 
____(88888888888888888888,______,88888888888, 
____d888888888888888888888,____,8___"8888888b 
____88888888888888888888888__.;8'"""__(888888 
____8888888888888I"8888888P_,8"_,aaa,__888888 
____888888888888I:8888888"_,8"__'b8d'__(88888 
____(8888888888I'888888P'_,8)__________88888 
_____88888888I"__8888P'__,8")__________88888 
_____8888888I'___888"___,8"_(._.)_______88888 
_____(8888I"_____"88,__,8"_____________,8888P 
______888I'_______"P8_,8"_____________,88888) 
_____(88I'__________",8"__M""""""M___,888888' 
____,8I"____________,8(____"aaaa"___,8888888 
___,8I'____________,888a___________,8888888) 
__,8I'____________,888888,_______,888888888 
_,8I'____________,8888888''-===-'888888888' 
,8I'____________,8888888"________88888888" 
8I'____________,8"____88_________"888888P 
8I____________,8'_____88__________'P888" 
8I___________,8I______88____________"8ba,. 
(8,_________,8P'______88______________88""8bma,. 
_8I________,8P'_______88,______________"8b___""P8ma, 
_(8,______,8d"________'88,_______________"8b_____'"8a 
__8I_____,8dP_________,8X8,________________"8b.____:8b 
__(8____,8dP'__,I____,8XXX8,________________'88,____8) 
___8,___8dP'__,I____,8XxxxX8,_____I,_________8X8,__,8 
___8I___8P'__,I____,8XxxxxxX8,_____I,________'8X88,I8 
___I8,__"___,I____,8XxxxxxxxX8b,____I,________8XXX88I, 
___'8I______I'__,8XxxxxxxxxxxxXX8____I________8XXxxXX8, 
____8I_____(8__,8XxxxxxxxxxxxxxxX8___I________8XxxxxxXX8, 
___,8I_____I[_,8XxxxxxxxxxxxxxxxxX8__8________8XxxxxxxxX8, 
___d8I,____I[_8XxxxxxxxxxxxxxxxxxX8b_8_______(8XxxxxxxxxX8, 
___888I____'8,8XxxxxxxxxxxxxxxxxxxX8_8,_____,8XxxxxxxxxxxX8 
___8888,____"88XxxxxxxxxxxxxxxxxxxX8)8I____.8XxxxxxxxxxxxX8 
__,8888I_____88XxxxxxxxxxxxxxxxxxxX8_'8,__,8XxxxxxxxxxxxX8" 
__d88888_____'8XXxxxxxxxxxxxxxxxxX8'__'8,,8XxxxxxxxxxxxX8" 
__888888I_____'8XXxxxxxxxxxxxxxxX8'____"88XxxxxxxxxxxxX8" 
__88888888bbaaaa88XXxxxxxxxxxxXX8)______)8XXxxxxxxxxXX8" 
__8888888I,_''""""""8888888888888888aaaaa8888XxxxxXX8" 
__(8888888I,______________________.__'''"""""88888P" 
___88888888I,___________________,8I___8,_______I8" 
____"""88888I,________________,8I'____"I8,____;8" 
___________'8I,_____________,8I'_______'I8,___8) 
____________'8I,___________,8I'__________I8__:8' 
_____________'8I,_________,8I'___________I8__:8 
______________'8I_______,8I'_____________'8__(8 
_______________8I_____,8I'________________8__(8; 
_______________8I____,8"__________________I___88, 
______________.8I___,8'_______________________8"8, 
______________(PI___'8_______________________,8,'8, 
_____________.88'____________,@@___________.a8X8,'8, 
_____________(88_____________@@@_________,a8XX888,'8, 
____________(888_____________@@'_______,d8XX8"__"b_'8, 
___________.8888,_____________________a8XXX8"____"a_'8, 
__________.888X88___________________,d8XX8I"______9,_'8, 
_________.88:8XX8,_________________a8XxX8I'_______'8__'8, 
________.88'_8XxX8a_____________,ad8XxX8I'________,8___'8, 
________d8'__8XxxxX8ba,______,ad8XxxX8I"__________8__,__'8, 
_______(8I___8XxxxxxX888888888XxxxX8I"____________8__II__'8 
_______8I'___"8XxxxxxxxxxxxxxxxxxX8I'____________(8__8)___8; 
______(8I_____8XxxxxxxxxxxxxxxxxX8"______________(8__8)___8I 
______8P'_____(8XxxxxxxxxxxxxxX8I'________________8,_(8___:8 
_____(8'_______8XxxxxxxxxxxxxxX8'_________________'8,_8____8 
_____8I________'8XxxxxxxxxxxxX8'___________________'8,8___;8 
_____8'_________'8XxxxxxxxxxX8'_____________________'8I__,8' 
_____8___________'8XxxxxxxxX8'_______________________8'_,8' 
_____8____________'8XxxxxxX8'________________________8_,8' 
_____8_____________'8XxxxX8'________________________d'_8' 
_____8______________'8XxxX8_________________________8_8' 
_____8________________"8X8'_________________________"8" 
_____8,________________'88___________________________8 
_____8I________________,8'__________________________d) 
_____'8,_______________d8__________________________,8 
______(b_______________8'_________________________,8' 
_______8,_____________dP_________________________,8' 
_______(b_____________8'________________________,8' 
________8,___________d8________________________,8' 
________(b___________8'_______________________,8' 
_________8,_________a8_______________________,8' 
_________(b_________8'______________________,8' 
__________8,_______,8______________________,8' 
__________(b_______8'_____________________,8' 
___________8,_____,8_____________________,8' 
___________(b_____8'____________________,8' 
____________8,___d8____________________,8' 
____________(b__,8'___________________,8' 
_____________8,,I8___________________,8' 
_____________I8I8'__________________,8' 
_____________'I8I__________________,8' 
______________I8'_________________,8' 
______________"8_________________,8' 
______________(8________________,8' 
______________8I_______________,8' 
______________(b,___8,________,8) 
______________'8I___"88______,8i8, 
_______________(b,__________,8"8") 
_______________'8I__,8______8)_8_8 
________________8I__8I______"__8_8 
________________(b__8I_________8_8 
________________'8__(8,________b_8, 
_________________8___8)________"b"8, 
_________________8___8(_________"b"8 
_________________8___"I__________"b8, 
_________________8________________'8) 
_________________8_________________I8 
_________________8_________________(8 
_________________8,_________________8, 
_________________Ib_________________8) 
_________________(8_________________I8 
__________________8_________________I8 
__________________8_________________I8 
__________________8,________________I8 
__________________Ib________________8I 
__________________(8_______________(8' 
___________________8_______________I8 
___________________8,______________8I 
___________________Ib_____________(8' 
___________________(8_____________I8 
___________________'8_____________8I 
____________________8____________(8' 
____________________8,___________I8 
____________________Ib___________8I 
____________________(8___________8' 
_____________________8,_________(8 
_____________________Ib_________I8 
_____________________(8_________8I 
______________________8,________8' 
______________________(b_______(8 
_______________________8,______I8 
_______________________I8______I8 
_______________________(8______I8 
________________________8______I8, 
________________________8______8_8, 
________________________8,_____8_8' 
_______________________,I8_____"8" 
______________________,8"8,_____8, 
_____________________,8'_'8_____'b 
____________________,8'___8______8, 
___________________,8'____(a_____'b 
__________________,8'_____'8______8, 
__________________I8/______8______'b, 
__________________I8-/_____8_______'8, 
__________________(8/-/____8________'8, 
___________________8I/-/__,8_________'8 
___________________'8I/--,I8________-8) 
____________________'8I,,d8I_______-8) 
______________________"bdI"8,_____-I8 
___________________________'8,___-I8' 
____________________________'8,,--I8 
_____________________________'Ib,,I8 
______________________________'I8I 

    `);

    wait(2);
    console.log(`[You Win]`)
    wait(2);
    var play =ask.keyInYN(`
    
    Continue playing?: `);
    if (play==="n"){fail;}
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function wait(seconds) {
      seconds*=1000;
    await sleep(seconds);
}


// greeting
function greet(){
console.log(`It's dark...`)
wait(3);
console.log(`The fires of your village are barely glooming at this distance.`)
wait(2);
console.log(`
                         __..--.._
  .....              .--~  .....  '.
.":    "'-..  .    .' ..-'"    :". ''
' '._ ' _.''"(     '-"''._ ' _.' '
     ~~~      '.          ~~~
              .'
             /
            (
             ^---'
`)
wait(1);
console.log(`
     "I will get my revenge."
     
     `)

wait(2);

ask.keyIn(`

[Press any button to continue.]

`)

}






module.exports = { 
    walk: walk,
    run: run,
    greet: greet,
    wait: wait,



}