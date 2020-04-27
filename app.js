// common variation
let step = 0;
let enable = true;
let enhanceCount = 0;
let recoveryCount = 0;

// conditional variation
let simulLevel = 1;
let simulStartLevel = 0;
let simulCount = 0;
let simulRecoveryCount = 0;
let maxStep = 0;
let simulStatus = true;

const stepDiv = document.getElementById('step');
const resultDiv = document.getElementById('result');
const textDiv = document.getElementById('text');
const recoveryCountDiv = document.getElementById('recovery-count');

const hammer = document.getElementById('hammer');
const loading = document.getElementById('loading');

const recovery = document.getElementById('recovery');
// const simulRecovery = document.getElementById('simul-recovery');

function reinforce(protected, recovered) {
  if (step === 12) {
    alert("13강은 확률표 나오면 추가할게요. /'O_o/'");
    return;
  }
  if (!enable) {
    alert('파괴된 장비를 복구하려면\n"축복받은 복원의 주문서"가 필요합니다.');
    document.getElementById('use-recovery').focus();
    return;
  }
  enhanceCount += 1;
  const num = Math.random();
  switch (step) {

    case 0:
      step += 1;
      resultDiv.innerText = '성공!';
      break;

    case 1:
      step += 1;
      resultDiv.innerText = '성공!';
      break;

    case 2:
      if (num > 0.05) {
        step += 1;
        resultDiv.innerText = '성공!';
      }
      else {
        resultDiv.innerText = '변화 없음...';
      }
      break;

    case 3:
      
      if (num > 0.43) {
        step += 1;
        resultDiv.innerText = '성공!';
      }
      else if (num <= 0.025 && !protected) {
        step -= 1;
        resultDiv.innerText = '하락ㅠ';
      }
      else {
        resultDiv.innerText = '변화 없음...';
      }
      break;

    case 4:
      
      if (num > 0.7) {
        step += 1;
        resultDiv.innerText = '성공!';
      }
      else if (num <= 0.26 && !protected) {
        step -= 1;
        resultDiv.innerText = '하락ㅠ';
      }
      else {
        resultDiv.innerText = '변화 없음...';
      }
      break;
    
    case 5:
      
      if (num > 0.835) {
        step += 1;
        resultDiv.innerText = '성공!';
      }
      else if (num <= 0.51 && !protected) {
        step -= 1;
        resultDiv.innerText = '하락ㅠ';
      }
      else {
        resultDiv.innerText = '변화 없음...';
      }
      break;

    case 6:
      
      if (num > 0.8782) {
        step += 1;
        resultDiv.innerText = '성공!';
      }
      else if (num <= 0.3654 && !protected) {
        step -= 1;
        resultDiv.innerText = '하락ㅠ';
      }
      else if (num > 0.3654 && num <= 0.6809 && !protected) {
        step = 0;
        resultDiv.innerText = '초기화';
      }
      else {
        resultDiv.innerText = '변화 없음...';
      }
      break;
    
    case 7:
      
      if (num > 0.925) {
        step += 1;
        resultDiv.innerText = '성공!';
      }
      else if (num <= 0.3865 && !protected) {
        step -= 1;
        resultDiv.innerText = '하락ㅠ';
      }
      else if (num > 0.3865 && num <= 0.6461 && !protected) {
        step = 0;
        resultDiv.innerText = '초기화';
      }
      else if (num > 0.6461 && num <= 0.8307) {
        if (recovered) {
          recoveryCount += 1;
          recoveryCountDiv.innerText = `복원횟수: ${recoveryCount}`;
          resultDiv.innerText = '복원됨';
        } else {
          enable = false;
          resultDiv.innerText = '파괴!';
        }
      }
      else {
        resultDiv.innerText = '변화 없음...';
      }
      break;
    
    case 8:
      
      if (num > 0.9654) {
        step += 1;
        resultDiv.innerText = '성공!';
      }
      else if (num <= 0.3115 && !protected) {
        step -= 1;
        resultDiv.innerText = '하락ㅠ';
      }
      else if (num > 0.3115 && num <= 0.6038 && !protected) {
        step = 0;
        resultDiv.innerText = '초기화';
      }
      else if (num > 0.6038 && num <= 0.8018) {
        if (recovered) {
          recoveryCount += 1;
          recoveryCountDiv.innerText = `복원횟수: ${recoveryCount}`;
          resultDiv.innerText = '복원됨';
        } else {
          enable = false;
          resultDiv.innerText = '파괴!';
        }
      }
      else {
        resultDiv.innerText = '변화 없음...';
      }
      break;

    case 9:
      
      if (num > 0.9867) {
        step += 1;
        resultDiv.innerText = '성공!';
      }
      else if (num <= 0.2252 && !protected) {
        step -= 1;
        resultDiv.innerText = '하락ㅠ';
      }
      else if (num > 0.2252 && num <= 0.6159 && !protected) {
        step = 0;
        resultDiv.innerText = '초기화';
      }
      else if (num > 0.6159 && num <= 0.9139) {
        if (recovered) {
          recoveryCount += 1;
          recoveryCountDiv.innerText = `복원횟수: ${recoveryCount}`;
          resultDiv.innerText = '복원됨';
        } else {
          enable = false;
          resultDiv.innerText = '파괴!';
        }
      }
      else {
        resultDiv.innerText = '변화 없음...';
      }
      break;

    case 10:
      
      if (num > 0.9901) {
        step += 1;
        resultDiv.innerText = '성공!';
      }
      else if (num <= 0.1390 && !protected) {
        step -= 1;
        resultDiv.innerText = '하락 ㅠ';
      }
      else if (num > 0.1390 && num <= 0.6125 && !protected) {
        step = 0;
        resultDiv.innerText = '초기화';
      }
      else if (num > 0.6125 && num <= 0.8873) {
        if (recovered) {
          recoveryCount += 1;
          recoveryCountDiv.innerText = `복원횟수: ${recoveryCount}`;
          resultDiv.innerText = '복원됨';
        } else {
          enable = false;
          resultDiv.innerText = '파괴!';
        }
      }
      else {
        resultDiv.innerText = '변화 없음...';
      }
      break;

    case 11:
      // 성공 0.5 %
      // 파괴 18.5%
      // 초기화 56%
      // 실패 25
      if (num > 0.995) {
        step += 1;
        resultDiv.innerText = '성공!';
      }
      else if (num <= 0.25) {
        step -= 1;
        resultDiv.innerText = '하락ㅠ';
      }
      else if (num > 0.25 && num <= 0.71 && !protected) {
        step = 0;
        resultDiv.innerText = '초기화';
      }
      else if (num > 0.71 && num <= 0.895) {
        if (recovered) {
          recoveryCount += 1;
          recoveryCountDiv.innerText = `복원횟수: ${recoveryCount}`;
          resultDiv.innerText = '복원됨';
        } else {
          enable = false;
          resultDiv.innerText = '파괴!';
        }
      }
      else {
        resultDiv.innerText = '변화 없음...';
      }
      break;
  }
  stepDiv.innerText = `강화수치 ${step}`;
  textDiv.innerText = `강화시도횟수: ${enhanceCount}`;
}

function simulateReinforce(protected) {
  const num = Math.random();
  let currentStep = step;
  switch (step) {
    case 0:
      step += 1;
      break;

    case 1:
      step += 1;    
      break;

    case 2:
      if (num > 0.05) step += 1;
      break;

    case 3:
      if (num > 0.43) step += 1;
      else if (num <= 0.025 && !protected) step -= 1;
      break;

    case 4:
      if (num > 0.7)step += 1;
      else if (num <= 0.26 && !protected) step -= 1;
      break;
    
    case 5:
      if (num > 0.835) step += 1;
      else if (num <= 0.51 && !protected) step -= 1;
      break;

    case 6:
      
      if (num > 0.8782) step += 1;
      else if (num <= 0.3654 && !protected) step -= 1;
      else if (num > 0.3654 && num <= 0.6809 && !protected) step = 0;
      break;
    
    case 7:
      
      if (num > 0.925) step += 1;
      else if (num <= 0.3865 && !protected) step -= 1;
      else if (num > 0.3865 && num <= 0.6461 && !protected) step = 0;
      else if (num > 0.6461 && num <= 0.8307) recoveryCount += 1;
      break;
    
    case 8:
      
      if (num > 0.9654) step += 1;
      else if (num <= 0.3115 && !protected) step -= 1;
      else if (num > 0.3115 && num <= 0.6038 && !protected) step = 0;
      else if (num > 0.6038 && num <= 0.8018) recoveryCount += 1;
      break;

    case 9:
      
      if (num > 0.9867) step += 1;
      else if (num <= 0.2252 && !protected) step -= 1;
      else if (num > 0.2252 && num <= 0.6159 && !protected) step = 0;
      else if (num > 0.6159 && num <= 0.9139) recoveryCount += 1;
      break;

    case 10:
      
      if (num > 0.9901) step += 1;
      else if (num <= 0.1390 && !protected) step -= 1;
      else if (num > 0.1390 && num <= 0.6125 && !protected) step = 0;
      else if (num > 0.6125 && num <= 0.8873) recoveryCount += 1;
      break;

    case 11:
      // 임의 값 설정
      // 성공 0.5%
      // 파괴 18.5%
      // 초기화 56%
      // 실패 25%
      if (num > 0.995) step += 1;
      else if (num <= 0.25) step -= 1;
      else if (num > 0.25 && num <= 0.71 && !protected) step = 0;
      else if (num > 0.71 && num <= 0.895) recoveryCount += 1;
      break;
  }
  if (currentStep < step) currentStep = step;
  if (currentStep > maxStep) maxStep = currentStep;
}

function useRecovery () {
  if (enable) return;
  enable = true;
  recoveryCount += 1;
  recoveryCountDiv.innerText = `복원횟수: ${recoveryCount}`;
  resultDiv.innerText = '복원됨';
}

function simulation(a, b, p, s) {
  if (s && simulLevel < simulStartLevel) {
    alert('원하는 강화수치는 시작 강화수치보다 작을 수 없습니다.\n10강폴이 목적인가요ㅋㅋ?');
    return;
  }
  step = 0;
  maxStep = 0;
  recoveryCount = 0;
  enhanceCount = 0;
  if (s) step = s;
  if (!a && !b) {
    alert('원하는 강화수치나 시도할 강화 횟수를 입력해주세요.');
    return;
  }
  if (!a) a = 13;
  if (!b) b = 100000000;
  while(step < a && enhanceCount < b) {
    simulateReinforce(p);
    enhanceCount += 1;
  }
  stepDiv.innerText = `강화수치 ${step}`;
  textDiv.innerText = `강화 시도 횟수: ${enhanceCount}, 최대 강화수치: ${maxStep}`;
  recoveryCountDiv.innerText = `복원횟수: ${recoveryCount}`;
  if (step === a) resultDiv.innerText = '오~';
  else resultDiv.innerText = 'ㅋㅋ 어림도없지';
}

// 리셋
function reset () {
  location.reload();
}

// 기본
document.getElementById('enhance').addEventListener('click', () => {reinforce(false, recovery.checked)});
document.getElementById('protected-enhance').addEventListener('click', () => {reinforce(true, recovery.checked)});
document.getElementById('use-recovery').addEventListener('click', () => {useRecovery();});
document.getElementById('reset').addEventListener('click', reset);


// 시뮬레이션
document.getElementById('simul-button').addEventListener('click', () => {simulation(simulLevel, simulCount, false, simulStartLevel);});
document.getElementById('simul-protected-button').addEventListener('click', () => {simulation(simulLevel, simulCount, true, simulStartLevel);});
document.getElementById('simul-count').addEventListener('change', (e) => {
  // if (!(e.key * 1 || e.key === '0') && e.key !== 'Enter') {
  //   e.preventDefault();
  //   alert('숫자만 입력해주세요');
  // }
  if (e.target.value === '0') {
    alert('한번은 두드리셔야합니다.');
  }
  if (e.target.value >= 100000000) {
    e.preventDefault();
    e.target.value = 100000000;
  }
  setTimeout(() => simulCount = e.target.value * 1);
});
document.getElementById('simul-count').addEventListener('keydown', (e) => {
  if (e.key !== 'Backspace') return;
  setTimeout(() => simulCount = e.target.value * 1);
});

document.getElementById('simul-level').addEventListener('change', (e) => {
  simulLevel = e.target.value * 1;
});
document.getElementById('simul-start-level').addEventListener('change', (e) => {
  simulStartLevel = e.target.value * 1;
});

// 해머랑 로딩창 남음
