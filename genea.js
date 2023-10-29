/* auteur: Bertrand MAILLARD */
/* Date de création: 11/05/03 */
/* Modification: 19/04/05 Suppression de la fonction netie*/

function
 atteindre(ancre) {
 var F_quartier = window.parent.frames[1];
 var nf = F_quartier.location.pathname;
 var ancre = ('#' + ancre );
 F_quartier.location.href = (nf + ancre);}

var f_aide;
function  ouvrir(nf) {
 if ((!f_aide)||(f_aide.closed))
 f_aide = window.open (nf,'aide','resizable=0,width=900,height=380');
 else if (!f_aide.closed);
 f_aide.focus();}

 var f_aide;
function  ouvrircarte(nf) {
 if ((!f_aide)||(f_aide.closed))
 f_aide = window.open (nf,'aide','resizable=0,width=950,height=650');
 else if (!f_aide.closed);
 f_aide.focus();}
