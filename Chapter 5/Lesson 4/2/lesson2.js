let styles = ["Джаз", "Блюз"];
styles.push("Рок-н-ролл");
function replace(smth) {
  for (let element of smth) {
    smth[(Math.round(smth.length - 1) / 2)] = 'Классика';
  }
}
replace(styles);
alert(styles.shift());
styles.unshift('Рэп', 'Рэгги');
