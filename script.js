function getGrade(subj) {
  let name, quiz, act, proj, attnd, exam;
  name = document.getElementById('quiz').value;
  quiz =  parseFloat(document.getElementById('quiz').value);
  act = parseFloat(document.getElementById('act').value);
  proj = parseFloat(document.getElementById('proj').value);
  attnd = parseFloat(document.getElementById('attnd').value);
  exam = parseFloat(document.getElementById('exam').value);
  
  return quiz*.2 + act*.2 + proj*.3 + attnd*.1 + exam*.2;
}

var student = {
  name: document.getElementById('name').value,
  subjectmath: 0,
  subjecteng: 0,
  subjectfil: 0,
  generalaverage: function() {
    return (this.subjectmath + this.subjecteng + this.subjectfil)/3;
  }
};

function dropHidden() {
  let subj = document.querySelector('input[name="fruit"]:checked');
  if (subj) {
    document.getElementsById('hidden').style.display = '';
  }