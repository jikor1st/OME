console.log('animation.js Load');
notYet();
function notYet(){
    alert("OME는 현재 구현중에 있습니다. 또한 크롬브라우저에서 제일 잘 보여지게 제작되었습니다.");
}
/*헤더 영역 */
const header = document.querySelector('header');
const logoIcon = document.querySelector('.logo-icon');
const emoPlusBtn = document.querySelector('.emo-plus-btn');
const navStorageBtn = document.querySelector('.nav-storage-button');
const navCustomBtn = document.querySelector('.nav-custom-button')
const navSettingButton = document.querySelector('.nav-setting-button');
/*로그인 섹션 */
const loginSection = document.querySelector('.login-section');
const loginLogoIcon = document.querySelector('.login-logo-icon');
const loginName = document.querySelector('.login-name');
const loginNameLimit = document.querySelector('.login-name-limit');
const loginStart = document.querySelector('.login-start');
/*홈 섹션 */
const homeSection = document.querySelector('.home-section');
/*홈 제일 많은 감정 섹션 */
const homeIcon = document.querySelector('.home-icon');
const homeManyOh = document.querySelector('.home-many-oh');
const homeManyIconArm = document.querySelector('.home-many-icon-arm');
const homeManyIconCon = document.querySelector('.home-many-icon-con');
const homeManyIconConImage = document.querySelector('.home-many-icon');
const homeManyDisplayCon = document.querySelector('.home-many-display-con');
const homeManyDisplayNoneCon = document.querySelector('.home-many-display-none-con');
const homeManyDisplayNone = document.querySelector('.home-many-display-none');
const homeManyDisplayName = document.querySelector('.home-many-display-name');
const homeManyDisplayEmo = document.querySelector('.home-many-display-emo');
const homeManyDisplayAddRecord = document.querySelector('.home-many-display-addRecord');
const homeManyHowmany = document.querySelector('.home-many-howmany');
const homeManyHowmanyDisplay = document.querySelector('.home-many-howmany-display');
const homeRandomEmo = document.querySelector('.home-random-emo');
/*홈 통계 섹션 */
const homeStatsPeriod = document.querySelector('.home-stats-period');
const homeGraphPercentbar = document.querySelectorAll('.home-graph-percentbar');
const homeGraphNum = document.querySelectorAll('.home-graph-num');
const homeGraphPercent = document.querySelectorAll('.home-graph-percent');

const homeRankDisplayNone = document.querySelector('.home-rank-display-none');
const homeRankEl = document.querySelectorAll('.home-rank-el');
const homeRankEmo = document.querySelectorAll('.home-rank-emo');
const homeRankEmoImg = document.querySelectorAll('.home-rank-emo > img');
/*  */
const homeCustomInformButton = document.querySelector('.home-custom-inform-button');

/*감정창고 섹션 */
const storageSeeBtn = document.querySelector('.storage-see');
const storageInputBack = document.querySelector('.storage-input-back');
const storageInputAll = document.querySelector('.storage-input-all');
const storageInputFollow = document.querySelector('.storage-input-follow');
const storageSection = document.querySelector('.storage-section');
const storageArea = document.querySelector('.storage-area');
const followStorageArea = document.querySelector('.follow-storage-area');
const storageLong = document.querySelector('.storage-long');

/*감정기록 섹션 */
const recordSection = document.querySelector('.record-section');
const recordExitBtn = document.querySelector('.record-exit-btn');
const recordTextInput = document.querySelector('.record-text-input');
const recordOutInput = document.querySelector('.outInput');
const recordTextLimit = document.querySelector('.record-text-limit > span');

let recordIconCon = document.querySelectorAll('.record-icon-con');
recordIconCon = Array.prototype.slice.call(recordIconCon);
const recordIcon = document.querySelectorAll('.record-icon');
const recordIconP = document.querySelectorAll('.record-icon-p');
const recordNowIcon = document.querySelector('.record-now-icon');
const recordNowIconImage = document.querySelector('.record-now-icon > img');
const recordSlider = document.querySelector('.record-slider');
const recordNowDegreePercent = document.querySelector('.record-now-degree-percent');
const recordNowDegreeEmo = document.querySelector('.record-now-degree-emo');
const recordRecordBtn = document.querySelector('.record-record-btn');

let recordSliderval = 50;
let recordIndex = 0;
let emoInM01 = 0;
let emoInM02 = 0;

/*emo 감정 하나하나 */
const emoRemoveBtn = document.getElementsByClassName('emo-remove-btn');
const emoRecordFollow = document.getElementsByClassName('emo-record-follow');
const emoOnFollow = document.getElementsByClassName('on-follow');

const storageEmo = storageArea.getElementsByClassName('emo');
const emoIcon0 = storageArea.getElementsByClassName('emo-icon0');
const emoIcon1 = storageArea.getElementsByClassName('emo-icon1');
const emoIcon2 = storageArea.getElementsByClassName('emo-icon2');
const emoIcon3 = storageArea.getElementsByClassName('emo-icon3');
const emoIcon4 = storageArea.getElementsByClassName('emo-icon4');
const emoIcon5 = storageArea.getElementsByClassName('emo-icon5');
let eICheck = 0;
let eIMany = 0;
let sTL = storageEmo.length;
let eI0L = emoIcon0.length;
let eI1L = emoIcon1.length;
let eI2L = emoIcon2.length;
let eI3L = emoIcon3.length;
let eI4L = emoIcon4.length;
let eI5L = emoIcon5.length;
let eIArray = [eI0L, eI1L, eI2L, eI3L, eI4L, eI5L];
let eIRnkArray = [
    {iconId : 0, iconLength : eI0L, iconColor : '#F94B58'},
    {iconId : 1, iconLength : eI1L, iconColor : '#6AE29E'},
    {iconId : 2, iconLength : eI2L, iconColor : '#3ECEE5'},
    {iconId : 3, iconLength : eI3L, iconColor : '#F7E221'},
    {iconId : 4, iconLength : eI4L, iconColor : '#FFA4D2'},
    {iconId : 5, iconLength : eI5L, iconColor : '#FCA651'}
]
/*시간 불러오기 */
let date = new Date();
let RMonth = null;
let RDate = null;
let RHours = null;
let RMinutes = null;

/*감정커스텀 섹션 */
const customSection = document.querySelector('.custom-section');
const customExitBtn = document.querySelector('.custom-exit-btn');
let customIconCon = document.querySelectorAll('.custom-icon-con');
customIconCon = Array.prototype.slice.call(customIconCon);
const customIcon = document.querySelectorAll('.custom-icon');
const customIconP = document.querySelectorAll('.custom-icon-p');
const customNowIcon = document.querySelector('.custom-now-icon');
const customNowIconImage = document.querySelector('.custom-now-icon > img');
const customResetBtn = document.querySelector('.custom-reset-btn');

const customHueArea = document.querySelector('.custom-hue-area');
const customHueBar = document.querySelector('.custom-hue-bar');
const hueValue = document.querySelector('.hue-value');

const customSaturateArea = document.querySelector('.custom-saturate-area');
const customSaturateBar = document.querySelector('.custom-saturate-bar');
const saturateValue = document.querySelector('.saturate-value');

const customBrightnessArea = document.querySelector('.custom-brightness-area');
const customBrightnessBar = document.querySelector('.custom-brightness-bar');
const brightnessValue = document.querySelector('.brightness-value');

let chX = null;
let csX = null;
let cbX = null;

/*setting 영역 */
const settingSection = document.querySelector('.setting-section');
const settingExitBtn = document.querySelector('.setting-exit-btn');
const settingResetFirst = document.querySelector('.setting-reset-first');
const settingResetLast = document.querySelector('.setting-reset-last');
const settingResetLastCon = document.querySelector('.setting-reset-last-con');
const settingResetNo = document.querySelector('.setting-reset-no');

let customIndex = 0;

let loginLogoTimer = null;
let LogoTimer = null;

/*기능호출 */
let checkVisibleBool = false;
function checkVisible(c){
    if(checkVisibleBool){return};
    if(c.classList.contains('outVisible')){
        c.classList.toggle('outVisible');
        c.style.transition = "all 0.4s linear";
    }else if(!c.classList.contains('outVisible')){
        c.classList.toggle('outVisible');
        c.style.transition = "all 0.25s linear";
    }
    setTimeout(function(){
        checkVisibleBool = false;
    },405);
}
function checkInput(t){
    if(t.classList.contains('outInput')){
        t.value = "";
        t.classList.add('onInput');
        t.classList.remove('outInput');
    }
}

function checkStart(){
    /*localStorage값이 undefined 가 아닐때 */
    if(localStorage.name === undefined){
        loginSection.style.display = "block";
        // console.log("localStorage unde : " + localStorage.name);
        LoginLogoIconAnimation();
    }else{
        // checkVisible(loginSection);
        loginSection.style.display = "none";
        checkVisible(homeSection);
        storageArea.innerHTML = localStorage.storage;
        // checkVisible(storageSection);
        settingName();
        checkVisible(header);
        clearInterval(loginLogoTimer);
        LogoIconAnimation();
        setting();
    }
}

/* 이미지 변경 함수호출 */
// 로그인시 로고 애니메이션
function LoginLogoIconAnimation(){
    let lic = 0;
    loginLogoTimer = setInterval(function(){
        lic++;
        if(lic > 5){
            lic = 0;
        }
        console.log(lic);
        loginLogoIcon.src = './asset/icon/static/icon' + lic + '.png';
    },500);
}
// 로그인후 로고 애니메이션
function LogoIconAnimation(){
    let lic = 0;
    logoTimer = setInterval(function(){
        lic++;
        if(lic > 5){
            lic = 0;
        }
        logoIcon.src = './asset/icon/static/icon' + lic + '.png';
    },500);
}
/*닉네임/이름 inner 변경 설정 */
function settingName(){
    homeManyDisplayName.innerText = localStorage.name;
}
/*감정창고 버튼 클릭시 */
function onNavStorageBtn(e){
    e.preventDefault();
    checkVisible(homeSection);
    checkVisible(storageSection);
}

/* 텍스트상자 클릭시 이벤트 호출 */
function onLoginName(e){
    e.preventDefault();
    if(e.type === "click"){
        inputClick(this);
    }
    if(e.type === "input"){
        console.log(this.value);
        loginNameLimit.innerText = this.value.length;
    }
}

function inputClick(e){
    // console.log(this);
    checkInput(e);
}

function onClickLoginStart(e){
    e.preventDefault();
    if(loginName.classList.contains("onInput") && loginName.value.length > 0){
        localStorage.name = loginName.value;
        localStorage.storage;
        console.log(localStorage.name + " : 값 start");
        checkStart();
        startColorSet();
    }
    else{ /* 감정 입력 방지 */
        loginName.value = "이름 또는 닉네임을 입력해주세요.";
        loginName.classList.add("outInput");
        loginName.classList.remove("onInput");
        loginName.style.transition = "all 0.2s";
        loginName.style.border = "1px solid #000000";
        setTimeout(function(){
            loginName.style.border = "1px solid #EEEEEE";
        },200);
        setTimeout(function(){
            loginName.style.border = "1px solid #000000";
        },400);
        setTimeout(function(){
            loginName.style.border = "1px solid #EEEEEE";
        },600);
    }
}
//컬러세팅
function startColorSet(){
    /*화나요 컬러 */
    localStorage.color00h = 356;
    localStorage.color00s = 94;
    localStorage.color00b = 64;
    localStorage.color00 = "hsl(" + localStorage.color00h + ", " + localStorage.color00s + "%, " + localStorage.color00b + "%)";

    /*우울해 컬러 */
    localStorage.color01h = 146;
    localStorage.color01s = 67;
    localStorage.color01b = 65;
    localStorage.color01 = "hsl(" + localStorage.color01h + ", " + localStorage.color01s + "%, " + localStorage.color01b + "%)";

    /*슬퍼요 컬러 */
    localStorage.color02h = 188;
    localStorage.color02s = 76;
    localStorage.color02b = 57;
    localStorage.color02 = "hsl(" + localStorage.color02h + ", " + localStorage.color02s + "%, " + localStorage.color02b + "%)";

    /*기뻐요 컬러 */
    localStorage.color03h = 54;
    localStorage.color03s = 93;
    localStorage.color03b = 55;
    localStorage.color03 = "hsl(" + localStorage.color03h + ", " + localStorage.color03s + "%, " + localStorage.color03b + "%)";
    
    /*설레요 컬러 */
    localStorage.color04h = 330;
    localStorage.color04s = 100;
    localStorage.color04b = 82;
    localStorage.color04 = "hsl(" + localStorage.color04h + ", " + localStorage.color04s + "%, " + localStorage.color04b + "%)";

    /*행복해 컬러 */
    localStorage.color05h = 30;
    localStorage.color05s = 97;
    localStorage.color05b = 65;
    localStorage.color05 = "hsl(" + localStorage.color05h + ", " + localStorage.color05s + "%, " + localStorage.color05b + "%)";
}
function resetColor(){
    if(customIndex == 0){
        localStorage.color00h = 356;
        localStorage.color00s = 94;
        localStorage.color00b = 64;
    }
    else if(customIndex == 1){
        localStorage.color01h = 146;
        localStorage.color01s = 67;
        localStorage.color01b = 65;
    }
    else if(customIndex == 2){
        localStorage.color02h = 188;
        localStorage.color02s = 76;
        localStorage.color02b = 57;
    }
    else if(customIndex == 3){
        localStorage.color03h = 54;
        localStorage.color03s = 93;
        localStorage.color03b = 55;
    }
    else if(customIndex == 4){
        localStorage.color04h = 330;
        localStorage.color04s = 100;
        localStorage.color04b = 82;
    }
    else if(customIndex == 5){
        localStorage.color05h = 30;
        localStorage.color05s = 97;
        localStorage.color05b = 65;
    }
}
function checkColorSet(){
    /*화나요 컬러 */
    if(customIndex == 0){
        localStorage.color00 = "hsl(" + localStorage.color00h + ", " + localStorage.color00s + "%, " + localStorage.color00b + "%)";
        customNowIcon.style.backgroundColor = localStorage.color00;
        recordNowIcon.style.backgroundColor = localStorage.color00;
        customIcon[customIndex].style.backgroundColor = localStorage.color00;
        hueValue.value = localStorage.color00h;
        saturateValue.value = localStorage.color00s;
        brightnessValue.value = localStorage.color00b;
    }
    /*우울해 컬러 */
    else if(customIndex == 1){
        localStorage.color01 = "hsl(" + localStorage.color01h + ", " + localStorage.color01s + "%, " + localStorage.color01b + "%)";
        customNowIcon.style.backgroundColor = localStorage.color01;
        recordNowIcon.style.backgroundColor = localStorage.color01;
        customIcon[customIndex].style.backgroundColor = localStorage.color01;
        hueValue.value = localStorage.color01h;
        saturateValue.value = localStorage.color01s;
        brightnessValue.value = localStorage.color01b;
    }
    /*슬퍼요 컬러 */
    else if(customIndex == 2){
        localStorage.color02 = "hsl(" + localStorage.color02h + ", " + localStorage.color02s + "%, " + localStorage.color02b + "%)";
        customNowIcon.style.backgroundColor = localStorage.color02;
        recordNowIcon.style.backgroundColor = localStorage.color02;
        customIcon[customIndex].style.backgroundColor = localStorage.color02;
        hueValue.value = localStorage.color02h;
        saturateValue.value = localStorage.color02s;
        brightnessValue.value = localStorage.color02b;
    }
    /*기뻐요 컬러 */
    else if(customIndex == 3){
        localStorage.color03 = "hsl(" + localStorage.color03h + ", " + localStorage.color03s + "%, " + localStorage.color03b + "%)";
        customNowIcon.style.backgroundColor = localStorage.color03;
        recordNowIcon.style.backgroundColor = localStorage.color03;
        customIcon[customIndex].style.backgroundColor = localStorage.color03;
        hueValue.value = localStorage.color03h;
        saturateValue.value = localStorage.color03s;
        brightnessValue.value = localStorage.color03b;
    }
    /*설레요 컬러 */
    else if(customIndex == 4){
        localStorage.color04 = "hsl(" + localStorage.color04h + ", " + localStorage.color04s + "%, " + localStorage.color04b + "%)";
        customNowIcon.style.backgroundColor = localStorage.color04;
        recordNowIcon.style.backgroundColor = localStorage.color04;
        customIcon[customIndex].style.backgroundColor = localStorage.color04;
        hueValue.value = localStorage.color04h;
        saturateValue.value = localStorage.color04s;
        brightnessValue.value = localStorage.color04b;
    }
    /*행복해 컬러 */
    else if(customIndex == 5){
        localStorage.color05 = "hsl(" + localStorage.color05h + ", " + localStorage.color05s + "%, " + localStorage.color05b + "%)";
        customNowIcon.style.backgroundColor = localStorage.color05;
        recordNowIcon.style.backgroundColor = localStorage.color05;
        customIcon[customIndex].style.backgroundColor = localStorage.color05;
        hueValue.value = localStorage.color05h;
        saturateValue.value = localStorage.color05s;
        brightnessValue.value = localStorage.color05b;
    }
    customColorSetting();
}
/*감정 기록 기간 기능 */
function emoPeriod(){
    let emoPeriod00 = "";
    let emoPeriod01 = "";
    let emoLength = storageArea.childNodes.length - 1 ;
    let emoLength0 = storageArea.childNodes.length;
    console.log(emoLength0);
    //첫번째 날짜
    if(localStorage.storage === undefined){
        homeStatsPeriod.innerText = "";
        storageLong.innerText = "";
    }
    else{
        if(emoLength0 > 1){
            for(let i = 0;i<storageArea.childNodes[0].childNodes[1].childNodes[0].childNodes.length;i += 2){
                emoPeriod00 += storageArea.childNodes[0].childNodes[1].childNodes[0].childNodes[i].innerHTML;
                if(storageArea.childNodes[0].childNodes[1].childNodes[0].childNodes.length -1 > i){
                    emoPeriod00 += ".";
                }
            }
            //두번째 날짜
            for(let i = 0;i<storageArea.childNodes[emoLength].childNodes[1].childNodes[0].childNodes.length;i += 2){
                emoPeriod01 += storageArea.childNodes[emoLength].childNodes[1].childNodes[0].childNodes[i].innerHTML;
                if(storageArea.childNodes[emoLength].childNodes[1].childNodes[0].childNodes.length -1 > i){
                    emoPeriod01 += ".";
                }
            }
            homeStatsPeriod.innerText = emoPeriod00 + " ~ " + emoPeriod01;
            storageLong.innerText = emoPeriod00 + " ~ " + emoPeriod01;
        }else{
            for(let i = 0;i<storageArea.childNodes[0].childNodes[1].childNodes[0].childNodes.length;i += 2){
                emoPeriod00 += storageArea.childNodes[0].childNodes[1].childNodes[0].childNodes[i].innerHTML;
                if(storageArea.childNodes[0].childNodes[1].childNodes[0].childNodes.length -1 > i){
                    emoPeriod00 += ".";
                }
            }
            homeStatsPeriod.innerText = emoPeriod00;
            storageLong.innerText = emoPeriod00;
        }
    }
    console.log(emoPeriod00);
    console.log(emoPeriod01);
    // let emoPeriod00 = storageArea.childNodes[0].childNodes[1].childNodes[0].childNodes[0].innerHTML +
    // console.log(storageArea.childNodes[0].childNodes[1].childNodes[0].childNodes[0].innerHTML);
    // console.log(storageArea.childNodes[0].childNodes[1].childNodes[0].childNodes[2].innerHTML);
    // console.log(storageArea.childNodes[0].childNodes[1].childNodes[0].childNodes[4].innerHTML);
    // for(let i = 0;i<storageArea.childNodes.length;i++){
}
/*홈 섹션 기능들 */
/* 홈 감정 기록 안되었을 때 감정 기록 버튼 */
function onHomeManyDisplayAddRecord(e){
    e.preventDefault();
    checkVisible(recordSection);
}
/* 홈 감정 커스텀 버튼 */
function onHomeCustomInformButton(e){
    e.preventDefault();
    checkVisible(customSection);
}

/*무슨 감정이 제일 많을까 기능 */
function homeRendering(){
    sTL = storageEmo.length;
    eI0L = emoIcon0.length;
    eI1L = emoIcon1.length;
    eI2L = emoIcon2.length;
    eI3L = emoIcon3.length;
    eI4L = emoIcon4.length;
    eI5L = emoIcon5.length;
    eIArray = [eI0L, eI1L, eI2L, eI3L, eI4L, eI5L];
    eIRnkArray = [
        {iconId : 0, iconLength : eI0L, iconColor : '#F94B58'},
        {iconId : 1, iconLength : eI1L, iconColor : '#6AE29E'},
        {iconId : 2, iconLength : eI2L, iconColor : '#3ECEE5'},
        {iconId : 3, iconLength : eI3L, iconColor : '#F7E221'},
        {iconId : 4, iconLength : eI4L, iconColor : '#FFA4D2'},
        {iconId : 5, iconLength : eI5L, iconColor : '#FCA651'}
    ]
    // eIRnkArray = Array.prototype.slice.call(eIRnkArray);
    console.log(eIRnkArray[3].iconLength);
    // eICheck = 제일 많은감정 갯수
    // eIMany = 제일 많은감정 순서

    // 어느 감정이 제일 많은지 확인
    for(let i = 0;i < eIArray.length;i++){
        if(eICheck < eIArray[i]){
            eICheck = eIArray[i];
            eIMany = i;
            // console.log(eIMany);
            console.log("eI : " + eICheck);
        }
    }
    let srt = "iconLength";
    eIRnkArray.sort(function(a, b){
        return b[srt] - a[srt];
    });
    homeManyFunction();
    homeRandomRendering();
    graphFunction();
    rakingFunction();
}
function homeManyFunction(){
    homeManyHowmany.innerHTML = '<span class="home-many-howmany-display">' + eICheck + '</span>/' + sTL;
    homeManyIconArm.src = './asset/icon/movement/emovement0' + eIMany + '.png';
    if(sTL <= 0){
        console.log('0보다 적어요');
        homeIcon.src = './asset/icon/static/icon' + 3 + '.png';
        homeManyIconCon.style.backgroundColor = "#E8E8E8";
        homeManyIconArm.style.visibility = "hidden";

        homeManyOh.style.visibility = "hidden";
        homeManyDisplayNoneCon.style.visibility = "visible";
        homeManyDisplayCon.style.visibility = "hidden";
        for(let i = 0;i<homeRankEl.length;i++){
            homeRankEl[i].style.visibility = "hidden";
        }
        homeRankDisplayNone.style.visibility = "visible";
    }else{
        homeIcon.src = './asset/icon/static/icon' + eIMany + '.png';
        homeManyIconArm.style.visibility = "visible";

        homeManyOh.style.visibility = "visible";
        homeManyDisplayNoneCon.style.visibility = "hidden";
        homeManyDisplayCon.style.visibility = "visible";
        for(let i = 0;i<homeRankEl.length;i++){
            homeRankEl[i].style.visibility = "visible";
        }
        homeRankDisplayNone.style.visibility = "hidden";
        if(eIMany == 0){
            homeManyIconCon.style.backgroundColor = '#F94B58';
            homeManyIconArm.style.width = "117.42px";
            homeManyIconArm.style.height = "67.54px";
            homeManyOh.innerText = "저런..";
            homeManyOh.style.color = "#F94B58";
            homeManyDisplayEmo.innerText = "화난날";
        }else if(eIMany == 1){
            homeManyIconCon.style.backgroundColor = '#6AE29E';
            homeManyIconArm.style.width = "98.86px";
            homeManyIconArm.style.height = "58.9px";
            homeManyOh.innerText = "저런..";
            homeManyOh.style.color = "#6AE29E";
            homeManyDisplayEmo.innerText = "우울한날";
        }else if(eIMany == 2){
            homeManyIconCon.style.backgroundColor = '#3ECEE5';
            homeManyIconArm.style.width = "98.86px";
            homeManyIconArm.style.height = "81.1px";
            homeManyOh.innerText = "저런..";
            homeManyOh.style.color = "#3ECEE5";
            homeManyDisplayEmo.innerText = "슬픈날";
        }else if(eIMany == 3){
            homeManyIconCon.style.backgroundColor = '#F7E221';
            homeManyIconArm.style.width = "142.71px";
            homeManyIconArm.style.height = "124.9px";
            homeManyOh.innerText = "오!";
            homeManyOh.style.color = "#F7E221";
            homeManyDisplayEmo.innerText = "기쁜날";
        }else if(eIMany == 4){
            homeManyIconCon.style.backgroundColor = '#FFA4D2';
            homeManyIconArm.style.width = "98.86px";
            homeManyIconArm.style.height = "58.81px";
            homeManyOh.innerText = "오!";
            homeManyOh.style.color = "#FFA4D2";
            homeManyDisplayEmo.innerText = "설렌날";
        }else if(eIMany == 5){
            homeManyIconCon.style.backgroundColor = '#FCA651';
            homeManyIconArm.style.width = "98.86px";
            homeManyIconArm.style.height = "58.81px";
            homeManyOh.innerText = "오!";
            homeManyOh.style.color = "#FCA651";
            homeManyDisplayEmo.innerText = "행복한날";
        }
    }
}
/*통계 그래프  */
function graphFunction(){
    let percentEI = 0;
    let graphHeight = 0;
    
    for(let i = 0;i<homeGraphNum.length;i++){
        console.log("eIArray : " + eIArray);
        homeGraphNum[i].innerText = eIArray[i];
        percentEI = Math.round((eIArray[i] / sTL) * 100);
        graphHeight = (eIArray[i] / sTL * 140);
        if(percentEI > 0){
            homeGraphPercentbar[i].style.height = graphHeight + 20 + "px";
            homeGraphPercent[i].innerText = percentEI + "%";
        }else{
            homeGraphPercentbar[i].style.height = 20 + "px";
            homeGraphPercent[i].innerText = "";
        }
        homeGraphPercentbar[i].style.transition = "1.5s ease";
        // if(graphHeight <= 50){
        //     graphHeight = graphHeight * 2;
        // }
        // homeGraphPercentbar[i].style.height = graphHeight + "px";
    }
}
function rakingFunction(){
    for(let i = 0;i<eIRnkArray.length;i++){
        if(eIRnkArray[i].iconLength <= 0){
            homeRankEmo[i].style.visibility = "hidden";
        }
        else if(eIRnkArray[i].iconLength > 0){
            homeRankEmo[i].style.visibility = "visible";
            homeRankEmo[i].style.backgroundColor = eIRnkArray[i].iconColor;
            homeRankEmoImg[i].src = "./asset/icon/moving/icon" + eIRnkArray[i].iconId + "/icon" + eIRnkArray[i].iconId + "_000.png";
        }
        
        
    }
}
/*그날의 감정을 떠올려요 기능 */
function homeRandomRendering(){
    let random = 0;
    // console.log("random : " + storageArea.innerHTML);
    if(sTL <= 0){
        homeRandomEmoTemplate = '<div class="emo">';
        homeRandomEmoTemplate +=    '<div class="emo-when-con">';
        homeRandomEmoTemplate +=        '<div class="home-random-title-con">';
        homeRandomEmoTemplate +=            '<p class="home-random-title">그날의 감정을 떠올려요</p>';
        homeRandomEmoTemplate +=            '<p class="home-random-subtitle">무작위로 가져온 감정이에요</p>';
        homeRandomEmoTemplate +=        '</div>';
        homeRandomEmoTemplate +=    '</div>';
        // homeRandomEmoTemplate +=        storageArea.childNodes[random].childNodes[2].outerHTML;
        homeRandomEmoTemplate +=    '<div class="emo-record-in-not">';
        homeRandomEmoTemplate +=        '<div class="emo-icon" style="background-color:#E8E8E8">';
        homeRandomEmoTemplate +=            '<img class="emo-icon-in" src="./asset/icon/moving/icon3/icon3_000.png"/>';
        homeRandomEmoTemplate +=        '</div>';
        homeRandomEmoTemplate +=        '<div class="emo-inform"><p class="emo-degree-not">아직 기록된 감정이 없어요</p></div>';
        homeRandomEmoTemplate +=    '</div>';
        // homeRandomEmoTemplate +=    '<div class="emo-inform"><p class="emo-degree"></p><p class="emo-text"></p></div>';
        homeRandomEmoTemplate += '</div>';
        homeRandomEmo.innerHTML = homeRandomEmoTemplate;
    }else{
        random = Math.floor(Math.random() * storageArea.childNodes.length);
        homeRandomEmoTemplate = '<div class="emo">';
        homeRandomEmoTemplate +=    '<div class="emo-when-con">';
        homeRandomEmoTemplate +=        '<div class="home-random-title-con">';
        homeRandomEmoTemplate +=            '<p class="home-random-title">그날의 감정을 떠올려요</p>';
        homeRandomEmoTemplate +=            '<p class="home-random-subtitle">무작위로 가져온 감정이에요</p>';
        homeRandomEmoTemplate +=        '</div>';
        homeRandomEmoTemplate +=        storageArea.childNodes[random].childNodes[1].outerHTML;
        homeRandomEmoTemplate +=    '</div>';
        homeRandomEmoTemplate +=        storageArea.childNodes[random].childNodes[2].outerHTML;
        homeRandomEmoTemplate += '</div>';
        homeRandomEmo.innerHTML = homeRandomEmoTemplate;
    }
}

/*감정 기록 추가 버튼 */
function onEmoPlusBtn(e){
    e.preventDefault();
    setSliderBackground();
    checkVisible(recordSection);
}
function setSliderBackground(){
    if(recordIndex == 0){
        recordIcon[recordIndex].style.backgroundColor = localStorage.color00;
        recordNowIcon.style.backgroundColor = localStorage.color00;
        recordSlider.style.background = '-webkit-gradient(linear, left top, right top, color-stop(' + recordSliderval + '%, ' + localStorage.color00 + '), color-stop(' + recordSliderval + '%, #F2F2F2))';
        recordNowDegreeEmo.innerText = '화나요';
    }else if(recordIndex == 1){
        recordIcon[recordIndex].style.backgroundColor = localStorage.color01;
        recordNowIcon.style.backgroundColor = localStorage.color01;
        recordSlider.style.background = '-webkit-gradient(linear, left top, right top, color-stop(' + recordSliderval + '%, ' + localStorage.color01 + '), color-stop(' + recordSliderval + '%, #F2F2F2))';
        recordNowDegreeEmo.innerText = '우울해';
    }else if(recordIndex == 2){
        recordIcon[recordIndex].style.backgroundColor = localStorage.color02;
        recordNowIcon.style.backgroundColor = localStorage.color02;
        recordSlider.style.background = '-webkit-gradient(linear, left top, right top, color-stop(' + recordSliderval + '%, ' + localStorage.color02 + '), color-stop(' + recordSliderval + '%, #F2F2F2))';
        recordNowDegreeEmo.innerText = '슬퍼요';
    }else if(recordIndex == 3){
        recordIcon[recordIndex].style.backgroundColor = localStorage.color03;
        recordNowIcon.style.backgroundColor = localStorage.color03;
        recordSlider.style.background = '-webkit-gradient(linear, left top, right top, color-stop(' + recordSliderval + '%, ' + localStorage.color03 + '), color-stop(' + recordSliderval + '%, #F2F2F2))';
        recordNowDegreeEmo.innerText = '기뻐요';
    }else if(recordIndex == 4){
        recordIcon[recordIndex].style.backgroundColor = localStorage.color04;
        recordNowIcon.style.backgroundColor = localStorage.color04;
        recordSlider.style.background = '-webkit-gradient(linear, left top, right top, color-stop(' + recordSliderval + '%, ' + localStorage.color04 + '), color-stop(' + recordSliderval + '%, #F2F2F2))';
        recordNowDegreeEmo.innerText = '설레요';
    }else if(recordIndex == 5){
        recordIcon[recordIndex].style.backgroundColor = localStorage.color05;
        recordNowIcon.style.backgroundColor = localStorage.color05;
        recordSlider.style.background = '-webkit-gradient(linear, left top, right top, color-stop(' + recordSliderval + '%, ' + localStorage.color05 + '), color-stop(' + recordSliderval + '%, #F2F2F2))';
        recordNowDegreeEmo.innerText = '행복해';
    }
}
/*감정 기록 섹션닫기버튼 */
function onRecordExitBtn(e){
    e.preventDefault();
    checkVisible(recordSection);
    checkVisibleBool = true;
    resetRecordInput(recordTextInput);
}
function resetRecordInput(c){
    c.style.transition = "all 0.25s linear";
    if(c.classList.contains('onInput')){
        recordTextInput.value = "내용을 입력해주세요";
        c.classList.toggle('outInput');
    }else if(!c.classList.contains('outInput')){
        c.classList.toggle('outInput');
    }
}

function onRecordTextInput(e){
    e.preventDefault();
    if(e.type==="click"){
        inputClick(this);
    }else if(e.type === "input"){
        recordTextLimit.innerText = this.value.length;
    }
}
/*감정기록 선택섹션 */
function onRecordIconCon(e){
    e.preventDefault();
    let ele = e.currentTarget;
    recordIndex = recordIconCon.indexOf(ele);
    console.log(recordIndex);
    if(!recordIcon[recordIndex].classList.contains('record-icon-selected')){
        for(let i = 0;i < recordIcon.length;i++){
            recordIcon[i].classList.remove('record-icon-selected');
            recordIcon[i].style.backgroundColor = "#EEEEEE";
            recordIcon[i].style.transition = "background-color 0.3s";
        }
        recordIcon[recordIndex].classList.add('record-icon-selected');
        recordNowIcon.style.transition = "background-color 0.3s";

        /*감정기록 현재 색상, 상태 업데이트 */
        recordNowIconImage.src = './asset/icon/moving/icon' + recordIndex + '/icon' + recordIndex + '_0' + emoInM01 + emoInM02 + '.png';
        setSliderBackground();
    }
    if(!recordIconP[recordIndex].classList.contains('record-icon-p-selected')){
        for(let i = 0;i < recordIconP.length;i++){
            recordIconP[i].classList.remove('record-icon-p-selected');
            recordIconP[recordIndex].classList.add('record-icon-p-selected');
        }
    }
}

/*감정 표정 모션 */
function emoInMotion(){
    setInterval(function(){
        emoInM02++;
        if(emoInM02 > 9){
            emoInM02 = 0;
            emoInM01++;
        }
        if(emoInM01 == 4 && emoInM02 == 0){
            emoInM02 = 0;
            emoInM01 = 0;
        }
        if(sTL <= 0){
            
        }else{
            
        }
        homeManyIconConImage.src = './asset/icon/moving/icon' + 3 + '/icon' + 3 + '_0' + emoInM01 + emoInM02 + '.png';
        homeManyIconConImage.src = './asset/icon/moving/icon' + eIMany + '/icon' + eIMany + '_0' + emoInM01 + emoInM02 + '.png';
        recordNowIconImage.src = './asset/icon/moving/icon' + recordIndex + '/icon' + recordIndex + '_0' + emoInM01 + emoInM02 + '.png';
        customNowIconImage.src = './asset/icon/moving/icon' + customIndex + '/icon' + customIndex + '_0' + emoInM01 + emoInM02 + '.png';
        
    },48); 
}
/*감정기록 슬라이더*/
function onRecordSlider(e){
    recordSliderval = recordSlider.value;
    if(recordSliderval <= 0){
        recordNowDegreePercent.innerText = '조금';
    }else if(recordSliderval >= 100){
        recordNowDegreePercent.innerText = '매우';
    }else{
        recordNowDegreePercent.innerText = recordSlider.value + '%';
    }

    if(recordIndex == 0){
        recordSlider.style.background = '-webkit-gradient(linear, left top, right top, color-stop(' + recordSliderval + '%, ' + localStorage.color00 + '), color-stop(' + recordSliderval + '%, #F2F2F2))';
    }else if(recordIndex == 1){
        recordSlider.style.background = '-webkit-gradient(linear, left top, right top, color-stop(' + recordSliderval + '%, ' + localStorage.color01 + '), color-stop(' + recordSliderval + '%, #F2F2F2))';
    }else if(recordIndex == 2){
        recordSlider.style.background = '-webkit-gradient(linear, left top, right top, color-stop(' + recordSliderval + '%, ' + localStorage.color02 + '), color-stop(' + recordSliderval + '%, #F2F2F2))';
    }else if(recordIndex == 3){
        recordSlider.style.background = '-webkit-gradient(linear, left top, right top, color-stop(' + recordSliderval + '%, ' + localStorage.color03 + '), color-stop(' + recordSliderval + '%, #F2F2F2))';
    }else if(recordIndex == 4){
        recordSlider.style.background = '-webkit-gradient(linear, left top, right top, color-stop(' + recordSliderval + '%, ' + localStorage.color04 + '), color-stop(' + recordSliderval + '%, #F2F2F2))';
    }else if(recordIndex == 5){
        recordSlider.style.background = '-webkit-gradient(linear, left top, right top, color-stop(' + recordSliderval + '%, ' + localStorage.color05 + '), color-stop(' + recordSliderval + '%, #F2F2F2))';
    }
}
/*날짜, 시간 변환 */
function dateReturn(){
    date = new Date();
    RMonth = (date.getMonth()+1);
    RDate = date.getDate();
    RHours = date.getHours();
    RMinutes = date.getMinutes();
    if(RMonth < 10){
        RMonth = "0" + (date.getMonth()+1);
    }
    if(RDate < 10){
        RDate = "0" + date.getDate();
    }
    if(RHours < 10){
        RHours = "0" + date.getHours();
    }
    if(RMinutes < 10){
        RMinutes = "0" + date.getMinutes();
    }
}
/*감정기록버튼섹션 */
function onRecordBtn(e){
    e.preventDefault();
    dateReturn();
    /*글 안 적었을 때 입력 방지 */
    if(recordTextInput.classList.contains("onInput")){
        checkVisible(recordSection);
        checkVisibleBool = true;
        setTimeout(function(){
            resetRecordInput(recordTextInput);
        },400);

        /*감정을 기록해주는 템플릿 설정 */
        if(recordIndex == 0){
            localStorage.dataRecord = "<div class='emo'><button class='emo-record-follow not-follow on-follow'></button><div class='emo-when'><p class='emo-date'><span class='emo-year'>" + date.getFullYear() + "</span>.<span class='emo-month'>" + RMonth + "</span>.<span class='emo-day'>" + RDate + "</span></p><p class='emo-time'><span class='emo-hour'>" + RHours + "</span>:<span class='emo-minutes'>" + RMinutes + "</span></p></div>";
            localStorage.dataRecord += "<div class='emo-record'><div class='emo-record-in'><div class='emo-icon emo-icon0' style=\"background-color:" + localStorage.color00 + "\"><img class='emo-icon-in' src='./asset/icon/moving/icon" + recordIndex + "/icon" + recordIndex + "_000.png' alt='감정표정' width='55' height='55'/></div>";
            localStorage.dataRecord += "<div class='emo-inform'><p class='emo-degree'>" + recordNowDegreePercent.innerText + " 화나요</p><p class='emo-text'>" + recordTextInput.value + "</p></div></div></div><button class='emo-remove-btn' style=\"background-color:" + localStorage.color00 + "\"><img src='./asset/icon/trash.png' alt='삭제' width='11.51'/></button><div class='emo-bar' style=\"background-color:"+ localStorage.color00 +"\"></div></div>";
        }
        else if(recordIndex == 1){
            localStorage.dataRecord = "<div class='emo'><button class='emo-record-follow not-follow on-follow'></button><div class='emo-when'><p class='emo-date'><span class='emo-year'>" + date.getFullYear() + "</span>.<span class='emo-month'>" + RMonth + "</span>.<span class='emo-day'>" + RDate + "</span></p><p class='emo-time'><span class='emo-hour'>" + RHours + "</span>:<span class='emo-minutes'>" + RMinutes + "</span></p></div>";
            localStorage.dataRecord += "<div class='emo-record'><div class='emo-record-in'><div class='emo-icon emo-icon1' style=\"background-color:" + localStorage.color01 + "\"><img class='emo-icon-in' src='./asset/icon/moving/icon" + recordIndex + "/icon" + recordIndex + "_000.png' alt='감정표정' width='55' height='55'/></div>";
            localStorage.dataRecord += "<div class='emo-inform'><p class='emo-degree'>" + recordNowDegreePercent.innerText + " 우울해</p><p class='emo-text'>" + recordTextInput.value + "</p></div></div></div><button class='emo-remove-btn' style=\"background-color:" + localStorage.color01 + "\"><img src='./asset/icon/trash.png' alt='삭제' width='11.51'/></button><div class='emo-bar' style=\"background-color: " + localStorage.color01 + "\"></div></div>";
        }
        else if(recordIndex == 2){
            localStorage.dataRecord = "<div class='emo'><button class='emo-record-follow not-follow on-follow'></button><div class='emo-when'><p class='emo-date'><span class='emo-year'>" + date.getFullYear() + "</span>.<span class='emo-month'>" + RMonth + "</span>.<span class='emo-day'>" + RDate + "</span></p><p class='emo-time'><span class='emo-hour'>" + RHours + "</span>:<span class='emo-minutes'>" + RMinutes + "</span></p></div>";
            localStorage.dataRecord += "<div class='emo-record'><div class='emo-record-in'><div class='emo-icon emo-icon2' style=\"background-color:" + localStorage.color02 + "\"><img class='emo-icon-in' src='./asset/icon/moving/icon" + recordIndex + "/icon" + recordIndex + "_000.png' alt='감정표정' width='55' height='55'/></div>";
            localStorage.dataRecord += "<div class='emo-inform'><p class='emo-degree'>" + recordNowDegreePercent.innerText + " 슬퍼요</p><p class='emo-text'>" + recordTextInput.value + "</p></div></div></div><button class='emo-remove-btn' style=\"background-color:" + localStorage.color02 + "\"><img src='./asset/icon/trash.png' alt='삭제' width='11.51'/></button><div class='emo-bar' style=\"background-color: " + localStorage.color02 + "\"></div></div>";
        }
        else if(recordIndex == 3){
            localStorage.dataRecord = "<div class='emo'><button class='emo-record-follow not-follow on-follow'></button><div class='emo-when'><p class='emo-date'><span class='emo-year'>" + date.getFullYear() + "</span>.<span class='emo-month'>" + RMonth + "</span>.<span class='emo-day'>" + RDate + "</span></p><p class='emo-time'><span class='emo-hour'>" + RHours + "</span>:<span class='emo-minutes'>" + RMinutes + "</span></p></div>";
            localStorage.dataRecord += "<div class='emo-record'><div class='emo-record-in'><div class='emo-icon emo-icon3' style=\"background-color:" + localStorage.color03 + "\"><img class='emo-icon-in' src='./asset/icon/moving/icon" + recordIndex + "/icon" + recordIndex + "_000.png' alt='감정표정' width='55' height='55'/></div>";
            localStorage.dataRecord += "<div class='emo-inform'><p class='emo-degree'>" + recordNowDegreePercent.innerText + " 기뻐요</p><p class='emo-text'>" + recordTextInput.value + "</p></div></div></div><button class='emo-remove-btn' style=\"background-color:" + localStorage.color03 + "\"><img src='./asset/icon/trash.png' alt='삭제' width='11.51'/></button><div class='emo-bar' style=\"background-color: " + localStorage.color03 + "\"></div></div>";
        }
        else if(recordIndex == 4){
            localStorage.dataRecord = "<div class='emo'><button class='emo-record-follow not-follow on-follow'></button><div class='emo-when'><p class='emo-date'><span class='emo-year'>" + date.getFullYear() + "</span>.<span class='emo-month'>" + RMonth + "</span>.<span class='emo-day'>" + RDate + "</span></p><p class='emo-time'><span class='emo-hour'>" + RHours + "</span>:<span class='emo-minutes'>" + RMinutes + "</span></p></div>";
            localStorage.dataRecord += "<div class='emo-record'><div class='emo-record-in'><div class='emo-icon emo-icon4' style=\"background-color:" + localStorage.color04 + "\"><img class='emo-icon-in' src='./asset/icon/moving/icon" + recordIndex + "/icon" + recordIndex + "_000.png' alt='감정표정' width='55' height='55'/></div>";
            localStorage.dataRecord += "<div class='emo-inform'><p class='emo-degree'>" + recordNowDegreePercent.innerText + " 설레요</p><p class='emo-text'>" + recordTextInput.value + "</p></div></div></div><button class='emo-remove-btn' style=\"background-color:" + localStorage.color04 + "\"><img src='./asset/icon/trash.png' alt='삭제' width='11.51'/></button><div class='emo-bar' style=\"background-color: " + localStorage.color04 + "\"></div></div>";
        }
        else if(recordIndex == 5){
            localStorage.dataRecord = "<div class='emo'><button class='emo-record-follow not-follow on-follow'></button><div class='emo-when'><p class='emo-date'><span class='emo-year'>" + date.getFullYear() + "</span>.<span class='emo-month'>" + RMonth + "</span>.<span class='emo-day'>" + RDate + "</span></p><p class='emo-time'><span class='emo-hour'>" + RHours + "</span>:<span class='emo-minutes'>" + RMinutes + "</span></p></div>";
            localStorage.dataRecord += "<div class='emo-record'><div class='emo-record-in'><div class='emo-icon emo-icon5' style=\"background-color:" + localStorage.color05 + "\"><img class='emo-icon-in' src='./asset/icon/moving/icon" + recordIndex + "/icon" + recordIndex + "_000.png' alt='감정표정' width='55' height='55'/></div>";
            localStorage.dataRecord += "<div class='emo-inform'><p class='emo-degree'>" + recordNowDegreePercent.innerText + " 행복해</p><p class='emo-text'>" + recordTextInput.value + "</p></div></div></div><button class='emo-remove-btn' style=\"background-color:" + localStorage.color05 + "\"><img src='./asset/icon/trash.png' alt='삭제' width='11.51'/></button><div class='emo-bar' style=\"background-color: " + localStorage.color05 + "\"></div></div>";
        }
        /* 감정 저장소 렌더링 */
        if(localStorage.storage === undefined){
            localStorage.storage = localStorage.dataRecord;
        }else{
            localStorage.storage += localStorage.dataRecord;
        }
        storageArea.innerHTML = localStorage.storage;
        
        for(let i = 0;i < emoRemoveBtn.length;i++){
            emoRemoveBtn[i].addEventListener('click', onEmoRemoveBtn);
        }
        for(let i = 0;i < emoRecordFollow.length;i++){
            emoRecordFollow[i].addEventListener('click', onEmoRecordFollow);
        }
        if(recordTextInput.classList.contains("onInput")){
            setTimeout(function(){
                recordTextInput.classList.add('outInput');
                recordTextInput.classList.remove('onInput');
                recordTextInput.value = "내용을 입력해주세요";
            },250);
        }
    }else if(recordTextInput.classList.contains("outInput")){ /* 감정 입력 방지 */
        recordTextInput.style.transition = "all 0.2s";
        recordTextInput.style.border = "1px solid #000000";
        setTimeout(function(){
            recordTextInput.style.border = "1px solid #EEEEEE";
        },200);
        setTimeout(function(){
            recordTextInput.style.border = "1px solid #000000";
        },400);
        setTimeout(function(){
            recordTextInput.style.border = "1px solid #EEEEEE";
        },600);
    }
    homeRendering();
    emoPeriod();
}
/*follow inner 세팅 */
// function followArraySet(){
//     // 감정이 1개이상 기록이 되었을때.
//     // followStorageArea.innerHTML = localStorage.storage;
//     followStorageArea.innerHTML = storageArea.innerHTML;
//     for(let i = 0;i < followStorageArea.childNodes.length;i++){
//         //팔로우 아닌것들 삭제기능
//         if(followStorageArea.childNodes[i].childNodes[0].classList.contains("not-follow")){
//             // console.log(followStorageArea.childNodes[i].childNodes[0].parentNode);
//             followStorageArea.childNodes[i].childNodes[0].parentNode.remove();
//         }
//         // if(followStorageArea.childNodes[i].childNodes[3]){
//         //     followStorageArea.childNodes[i].childNodes[3].remove();
//         // }
//         // console.log(followStorageArea.childNodes[i].childNodes[3]);
//     }
//     if(followStorageArea.childNodes.length > 0){
        
//     }
// }
/*storage 컨트롤 영역 */
function onStorageSeeBtn(e){
    e.preventDefault();
    storageInputBack.style.transition = "transform 0.2s";
    storageInputBack.classList.toggle('storage-input-back-toggle');
    checkVisible(followStorageArea);
    checkVisible(storageArea);
    setTimeout(function(){
        if(storageInputBack.classList.contains('storage-input-back-toggle')){
            /* 팔로잉 모아보기 */
            storageInputAll.style.color = "#ACACAC";
            storageInputFollow.src = "./asset/icon/on_follow.png";
            
        }else{
            /* 모두 모아보기 */
            storageInputAll.style.color = "#ffffff";
            storageInputFollow.src = "./asset/icon/not_follow.png";   
        }
    },100);
    followArraySet();
    // storageArea.innerHTML = localStorage.storage;
}
/*emo 컨트롤 영역 */
/*emo 삭제 버튼 */
function onEmoRemoveBtn(e){
    e.preventDefault();
    let emoThis = this.parentNode;
    /* 삭제 기능 */
    // console.log(e.currentTarget.parentNode);
    e.currentTarget.parentNode.style.transition = "all 0.4s";
    e.currentTarget.parentNode.classList.add('outRecordEmo');
    // this.parentNode.remove();
    setTimeout(function(){
        emoThis.remove();
        /* 렌더링 기능 */
        localStorage.storage = storageArea.innerHTML;
    },500);
    
}
/* emo 좋아요 버튼 */
let followToggle = false;
function onEmoRecordFollow(e){
    e.preventDefault();
    this.classList.toggle("not-follow");
    // storageArea.innerHTML.
    // for(let i = 0;i < emoRecordFollow.length;i++){
    //     emoRecordFollow[i].removeEventListener('click', onEmoRecordFollow);
    //     emoRecordFollow[i].addEventListener('click', onEmoRecordFollow);
    // }
    localStorage.storage = storageArea.innerHTML;
    // followArraySet();
}

/*감정 커스텀 영역 */
function onNavCustomBtn(e){
    e.preventDefault();
    checkVisible(customSection);
    customColorSetting();
}

function oncustomExitBtn(e){
    e.preventDefault();
    checkVisible(customSection);
    checkVisibleBool = true;
}

/*감정 커스텀 선택영역 */
function oncustomIconCon(e){
    e.preventDefault();
    let elel = e.currentTarget;
    customIndex = customIconCon.indexOf(elel);
    console.log(customIndex);
    
    if(!customIcon[customIndex].classList.contains('custom-icon-selected')){
        for(let i = 0;i < customIcon.length;i++){
            customIcon[i].classList.remove('custom-icon-selected');
            customIcon[i].style.backgroundColor = "#EEEEEE";
            customIcon[i].style.transition = "background-color 0.3s";
        }
        customIcon[customIndex].classList.add('custom-icon-selected');
        // customNowIcon.style.transition = "background-color 0.3s";

        /*감정기록 현재 색상, 상태 업데이트 */
        customNowIconImage.src = './asset/icon/moving/icon' + customIndex + '/icon' + customIndex + '_0' + emoInM01 + emoInM02 + '.png';
        checkColorSet();
    }

    if(!customIconP[customIndex].classList.contains('custom-icon-p-selected')){
        for(let i = 0;i < customIconP.length;i++){
            customIconP[i].classList.remove('custom-icon-p-selected');
            customIconP[customIndex].classList.add('custom-icon-p-selected');
        }
    }
}

/*감정 색 커스텀 영역 */
function customValueSet(){
    if(customIndex == 0){
        localStorage.color00h = hueValue.value;
        localStorage.color00s = saturateValue.value;
        localStorage.color00b = brightnessValue.value;
    }
    else if(customIndex == 1){
        localStorage.color01h = hueValue.value;
        localStorage.color01s = saturateValue.value;
        localStorage.color01b = brightnessValue.value;
    }
    else if(customIndex == 2){
        localStorage.color02h = hueValue.value;
        localStorage.color02s = saturateValue.value;
        localStorage.color02b = brightnessValue.value;
    }
    else if(customIndex == 3){
        localStorage.color03h = hueValue.value;
        localStorage.color03s = saturateValue.value;
        localStorage.color03b = brightnessValue.value;
    }
    else if(customIndex == 4){
        localStorage.color04h = hueValue.value;
        localStorage.color04s = saturateValue.value;
        localStorage.color04b = brightnessValue.value;
    }
    else if(customIndex == 5){
        localStorage.color05h = hueValue.value;
        localStorage.color05s = saturateValue.value;
        localStorage.color05b = brightnessValue.value;
    }
}
function onHueValue(e){
    customValueSet();
    checkColorSet();
}
function onSaturateValue(e){
    customValueSet();
    checkColorSet();
}
function onBrightnessValue(e){
    customValueSet();
    checkColorSet();
}

let downH = false;
function onCustomHueArea(e){
    e.preventDefault();
    let mouseX = e.clientX;
    let chLeft = mouseX - this.getBoundingClientRect().left;
    let chWidth = this.getBoundingClientRect().width;
    let chBarW = customHueBar.getBoundingClientRect().width/2;

    chX = chLeft/chWidth * 360;
    if(e.type === "mousemove" && downH){
        hueSetting();
    }else if(e.type === "mousedown"){
        downH = true;
        hueSetting();
        
    }else if(e.type === "mouseup" || e.type === "mouseleave"){
        downH = false;
    }
    function hueSetting(){
        if(chWidth >= chLeft && 0 <= chLeft){
            // hueValue.value = Math.round(chX);
            if(chX <= 360/2){
                chX = Math.floor(chX);
                customHueBar.style.left = (chLeft - chBarW) + 'px';
            }else{
                chX = Math.round(chX);
                customHueBar.style.left = (chLeft - chBarW*2) + 'px';
            }
            
            if(customIndex == 0){
                localStorage.color00h = chX;
                customNowIcon.style.backgroundColor = localStorage.color00;
            }
            else if(customIndex == 1){
                localStorage.color01h = chX;
                customNowIcon.style.backgroundColor = localStorage.color01;
            }
            else if(customIndex == 2){
                localStorage.color02h = chX;
                customNowIcon.style.backgroundColor = localStorage.color02;
            }
            else if(customIndex == 3){
                localStorage.color03h = chX;
                customNowIcon.style.backgroundColor = localStorage.color03;
            }
            else if(customIndex == 4){
                localStorage.color04h = chX;
                customNowIcon.style.backgroundColor = localStorage.color04;
            }
            else if(customIndex == 5){
                localStorage.color05h = chX;
                customNowIcon.style.backgroundColor = localStorage.color05;
            }
            checkColorSet();
        }
    }
}
function onCustomSaturateArea(e){
    e.preventDefault();
    let mouseX = e.clientX;
    let csLeft = mouseX - this.getBoundingClientRect().left;
    let csWidth = this.getBoundingClientRect().width;
    let csBarW = customSaturateBar.getBoundingClientRect().width / 2;

    csX = csLeft /csWidth * 100;
    if(e.type === "mousemove" && downH){
        SaturateSetting();

    }else if(e.type === "mousedown"){
        downH = true;
        SaturateSetting();
        
    }else if(e.type === "mouseup" || e.type === "mouseleave"){
        downH = false;
    }

    function SaturateSetting(){
        if(csWidth >= csLeft && 0 <= csLeft){
            if(csX <= 100/2){
                csX = Math.floor(csX);
                customSaturateBar.style.left = (csLeft - csBarW) + 'px';
            }else{
                csX = Math.round(csX);
                customSaturateBar.style.left = (csLeft - csBarW*2) + 'px';
            }
            
            if(customIndex == 0){
                localStorage.color00s = csX;
            }
            else if(customIndex == 1){
                localStorage.color01s = csX;
            }
            else if(customIndex == 2){
                localStorage.color02s = csX;
            }
            else if(customIndex == 3){
                localStorage.color03s = csX;
            }
            else if(customIndex == 4){
                localStorage.color04s = csX;
            }
            else if(customIndex == 5){
                localStorage.color05s = csX;
            }
            checkColorSet();
        }
        
    }
}
function onCustomBrightnessArea(e){
    e.preventDefault();
    let mouseX = e.clientX;
    let cbLeft = mouseX - this.getBoundingClientRect().left;
    let cbWidth = this.getBoundingClientRect().width;
    let cbBarW = customBrightnessBar.getBoundingClientRect().width / 2;

    cbX = cbLeft/cbWidth * 100;
    if(e.type === "mousemove" && downH){
        BrightnessSetting();

    }else if(e.type === "mousedown"){
        downH = true;
        BrightnessSetting();
        
    }else if(e.type === "mouseup" || e.type === "mouseleave"){
        downH = false;
    }
    function BrightnessSetting(){
        if(cbWidth >= cbLeft && 0 <= cbLeft){
            if(cbX <= 100/2){
                cbX = Math.floor(cbX);
                customBrightnessBar.style.left = (cbLeft - cbBarW) + 'px';
            }else{
                cbX = Math.round(cbX);
                customBrightnessBar.style.left = (cbLeft - cbBarW*2) + 'px';
            }

            if(customIndex == 0){
                localStorage.color00b = cbX;
            }
            else if(customIndex == 1){
                localStorage.color01b = cbX;
            }
            else if(customIndex == 2){
                localStorage.color02b = cbX;
            }
            else if(customIndex == 3){
                localStorage.color03b = cbX;
            }
            else if(customIndex == 4){
                localStorage.color04b = cbX;
            }
            else if(customIndex == 5){
                localStorage.color05b = cbX;
            }
            checkColorSet();
        }
    }
}
function customColorSetting(){
    if(customIndex == 0){
        chX = localStorage.color00h;
        csX = localStorage.color00s;
        cbX = localStorage.color00b;
        
        customNowIcon.style.backgroundColor = localStorage.color00;
        customIcon[0].style.backgroundColor = localStorage.color00;
        customSaturateArea.style.backgroundColor = "hsl(" + localStorage.color00h + ", 100%, 50%)";
        customBrightnessArea.style.backgroundColor = "hsl(" + localStorage.color00h + ", 100%, 50%)";
    }
    else if(customIndex == 1){
        chX = localStorage.color01h;
        csX = localStorage.color01s;
        cbX = localStorage.color01b;
        
        customNowIcon.style.backgroundColor = localStorage.color01;
        customIcon[1].style.backgroundColor = localStorage.color01;
        customSaturateArea.style.backgroundColor = "hsl(" + localStorage.color01h + ", 100%, 50%)";
        customBrightnessArea.style.backgroundColor = "hsl(" + localStorage.color01h + ", 100%, 50%)";
    }
    else if(customIndex == 2){
        chX = localStorage.color02h;
        csX = localStorage.color02s;
        cbX = localStorage.color02b;
        
        customNowIcon.style.backgroundColor = localStorage.color02;
        customIcon[2].style.backgroundColor = localStorage.color02;
        customSaturateArea.style.backgroundColor = "hsl(" + localStorage.color02h + ", 100%, 50%)";
        customBrightnessArea.style.backgroundColor = "hsl(" + localStorage.color02h + ", 100%, 50%)";
    }
    else if(customIndex == 3){
        chX = localStorage.color03h;
        csX = localStorage.color03s;
        cbX = localStorage.color03b;
        
        customNowIcon.style.backgroundColor = localStorage.color03;
        customIcon[3].style.backgroundColor = localStorage.color03;
        customSaturateArea.style.backgroundColor = "hsl(" + localStorage.color03h + ", 100%, 50%)";
        customBrightnessArea.style.backgroundColor = "hsl(" + localStorage.color03h + ", 100%, 50%)";
    }
    else if(customIndex == 4){
        chX = localStorage.color04h;
        csX = localStorage.color04s;
        cbX = localStorage.color04b;
        
        customNowIcon.style.backgroundColor = localStorage.color04;
        customIcon[4].style.backgroundColor = localStorage.color04;
        customSaturateArea.style.backgroundColor = "hsl(" + localStorage.color04h + ", 100%, 50%)";
        customBrightnessArea.style.backgroundColor = "hsl(" + localStorage.color04h + ", 100%, 50%)";
    }
    else if(customIndex == 5){
        chX = localStorage.color05h;
        csX = localStorage.color05s;
        cbX = localStorage.color05b;
        
        customNowIcon.style.backgroundColor = localStorage.color05;
        customIcon[5].style.backgroundColor = localStorage.color05;
        customSaturateArea.style.backgroundColor = "hsl(" + localStorage.color05h + ", 100%, 50%)";
        customBrightnessArea.style.backgroundColor = "hsl(" + localStorage.color05h + ", 100%, 50%)";
    }

    if(chX <= 360/2){
        customHueBar.style.left = ((chX - (customHueBar.getBoundingClientRect().width / 2)) / 360)*(customHueArea.getBoundingClientRect().width) + 'px';
    }else{
        customHueBar.style.left = ((chX / 360)*(customHueArea.getBoundingClientRect().width)-customHueBar.getBoundingClientRect().width) + 'px';
    }
    if(csX <= 100/2){
        customSaturateBar.style.left = ((csX/100))*customSaturateArea.getBoundingClientRect().width + 'px';
    }else{
        customSaturateBar.style.left = ((csX / 100)*(customSaturateArea.getBoundingClientRect().width)-customSaturateBar.getBoundingClientRect().width) + 'px';
    }
    if(cbX <= 100/2){
        customBrightnessBar.style.left = ((cbX/ 100)*customBrightnessArea.getBoundingClientRect().width) + 'px';
    }else{
        customBrightnessBar.style.left = (cbX / 100)*(customBrightnessArea.getBoundingClientRect().width)-customBrightnessBar.getBoundingClientRect().width + 'px';
    }
}
/*세팅 기능 영역 */
function onSettingExitBtn(e){
    e.preventDefault();
    checkVisible(settingSection);
    checkVisibleBool = true;
}
function onSettingResetFirst(e){
    e.preventDefault();
    checkVisible(settingResetFirst);
    checkVisible(settingResetLastCon);
}
function onSettingResetLast(e){
    e.preventDefault();
    /*리셋버튼 */
    localStorage.clear();
    setTimeout(function(){
        location.reload();
    },100);
}
function onSettingResetNo(e){
    e.preventDefault();
    checkVisible(settingResetLastCon);
    checkVisible(settingResetFirst);
    checkVisible(settingSection);
}

function onNavSettingButton(e){
    e.preventDefault();
    checkVisible(settingSection);
}
function onCustomResetBtn(e){
    e.preventDefault();
    resetColor();
    checkColorSet();
}

function addEvent(){
    loginName.addEventListener('click', onLoginName);
    loginName.addEventListener('input', onLoginName);
    loginStart.addEventListener('click', onClickLoginStart);

    navStorageBtn.addEventListener('click', onNavStorageBtn);
    emoPlusBtn.addEventListener('click', onEmoPlusBtn);
    navSettingButton.addEventListener('click', onNavSettingButton);

    homeManyDisplayAddRecord.addEventListener('click', onHomeManyDisplayAddRecord);
    homeCustomInformButton.addEventListener('click', onHomeCustomInformButton);

    // storageSeeBtn.addEventListener('click', onStorageSeeBtn);

    recordExitBtn.addEventListener('click', onRecordExitBtn);
    recordTextInput.addEventListener('click', onRecordTextInput);
    recordTextInput.addEventListener('input', onRecordTextInput);
    for(let i = 0;i < recordIconCon.length;i++){
        recordIconCon[i].addEventListener('click', onRecordIconCon);
    }
    recordSlider.addEventListener('input', onRecordSlider);
    recordRecordBtn.addEventListener('click', onRecordBtn);

    for(let i = 0;i < emoRemoveBtn.length;i++){
        emoRemoveBtn[i].addEventListener('click', onEmoRemoveBtn);
    }
    for(let i = 0;i < emoRecordFollow.length;i++){
        emoRecordFollow[i].addEventListener('click', onEmoRecordFollow);
    }

    for(let i = 0;i < customIconCon.length;i++){
        customIconCon[i].addEventListener('click', oncustomIconCon);
    }
    customResetBtn.addEventListener('click', onCustomResetBtn);

    hueValue.addEventListener('input', onHueValue);
    saturateValue.addEventListener('input', onSaturateValue);
    brightnessValue.addEventListener('input', onBrightnessValue);

    customHueArea.addEventListener('mousemove', onCustomHueArea);
    customHueArea.addEventListener('mousedown', onCustomHueArea);
    customHueArea.addEventListener('mouseup', onCustomHueArea);
    customHueArea.addEventListener('mouseleave', onCustomHueArea);

    customSaturateArea.addEventListener('mousemove', onCustomSaturateArea);
    customSaturateArea.addEventListener('mousedown', onCustomSaturateArea);
    customSaturateArea.addEventListener('mouseup', onCustomSaturateArea);
    customSaturateArea.addEventListener('mouseleave', onCustomSaturateArea);

    customBrightnessArea.addEventListener('mousemove', onCustomBrightnessArea);
    customBrightnessArea.addEventListener('mousedown', onCustomBrightnessArea);
    customBrightnessArea.addEventListener('mouseup', onCustomBrightnessArea);
    customBrightnessArea.addEventListener('mouseleave', onCustomBrightnessArea);

    settingExitBtn.addEventListener('click', onSettingExitBtn);
    settingResetFirst.addEventListener('click', onSettingResetFirst);
    settingResetLast.addEventListener('click', onSettingResetLast);
    settingResetNo.addEventListener('click', onSettingResetNo);

    navCustomBtn.addEventListener('click', onNavCustomBtn);
    customExitBtn.addEventListener('click', oncustomExitBtn);
}
function setting(){
    recordIcon[0].style.backgroundColor = localStorage.color00;
    customIcon[0].style.backgroundColor = localStorage.color00;
    customColorSetting();
    settingName();
}
function loadAll(){
    checkColorSet();
    checkStart();
    addEvent();
    emoInMotion();
    setting();
    homeRendering();
    homeRandomRendering();
    emoPeriod();
    // followArraySet();
}

loadAll();