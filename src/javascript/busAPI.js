/* Javascript 샘플 코드 */


var xhr = new XMLHttpRequest();
var url = 'https://cors-anywhere.herokuapp.com/http://apis.data.go.kr/1613000/SuburbsBusInfoService/getStrtpntAlocFndSuberbsBusInfo'; /*URL*/
var queryParams = '?' + encodeURIComponent('serviceKey') + '='+'0bTyH0GAfqUOoSym5fXUHBZgcRWJ%2BqEaYeP88dOgiilNYQl%2FJ8dq5ZbBW1l%2FSI8huZmirCwEpvcQ%2BLaXoFvbtA%3D%3D'; /*Service Key*/
queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /**/
queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10'); /**/
queryParams += '&' + encodeURIComponent('_type') + '=' + encodeURIComponent('json'); /**/
queryParams += '&' + encodeURIComponent('depTerminalId') + '=' + encodeURIComponent('NAI0511601'); /**/
queryParams += '&' + encodeURIComponent('arrTerminalId') + '=' + encodeURIComponent('NAI4809501'); /**/
queryParams += '&' + encodeURIComponent('depPlandTime') + '=' + encodeURIComponent('20220312'); /**/
queryParams += '&' + encodeURIComponent('busGradeId') + '=' + encodeURIComponent('IDG'); /**/
xhr.open('GET', url + queryParams);
xhr.onreadystatechange = function () {
    if (this.readyState == 4) {
        console.log(this.responseText);
    }
};

xhr.send('');