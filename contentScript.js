// const init = function() {
//     const injectElement = document.createElement('div');
//     injectElement.className = 'taha-Sheikh';
//     html =document.getElementsByTagName('html')[0].outerHTML;
//     injectElement.innerHTML = "<div ><h1 >Taha</h1>  <p> Lead Temperature </p></div>";
//     // document.body.appendChild(injectElement);
//     document.body.prepend(injectElement);
//     // var markup = document.documentElement.innerHTML;
//     // alert(markup);
   
// }
//  init();

const init = function() {
    const injectElement = document.createElement('div');
    injectElement.className = 'taha-Sheikh';
    html =document.getElementsByTagName('html')[0].outerHTML;
    injectElement.innerHTML = ` <style>
    .firstLine-div{
      display: flex;
      gap: 1%;
      margin-left: 12%;
  }
  .SecondLine-div{
      display: flex;
      gap: 1%;
      margin-left: 12%;
      margin-top: 2%;
  }
  .fl-div1{
      width: 428px;
      height: 172px;
      left: 252px;
      top: 47px;
      
      background: #FFFFFF;
      box-shadow: 0px 6px 5px rgba(0, 0, 0, 0.15);
      border-radius: 20px;
  }
  .fl-div1P{
      width: 179px;
      height: 24px;
      left: 269px;
      top: 55px;
      padding-left: 2%;
      padding-top: 2%;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 24px;
      padding-bottom: 2%;
      color: #686868;
  }
  .fl-div2{
      width: 275px;
      height: 172px;
      left: 700px;
      top: 47px;
      
      background: #FFFFFF;
      box-shadow: 0px 6px 5px rgba(0, 0, 0, 0.15);
      border-radius: 20px;
  }
  .fl-div2P{
      width: 140px;
      height: 24px;
      left: 715px;
      top: 55px;
      padding-left: 2%;
      padding-top: 2%;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 24px;
      
      color: #686868;
      
  }
  .fl-div2P1{
      width: 72px;
      height: 22px;
      left: 743px;
      top: 182px;
      
      font-family: 'Inter';
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 22px;
      /* identical to box height */
      
      
      color: #686868;
  }
  .fl-div3{
      width: 215px;
  height: 172px;
  left: 995px;
  top: 47px;
  
  background: #05758A;
  box-shadow: 0px 6px 5px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
  }
  .fl-div3P{
      width: 169px;
  height: 24px;
  left: 1019px;
  top: 55px;
  
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  padding-top: 3%;
  padding-left: 12%;
  
  color: #FFFFFF;
  }
  .fl-div3P1{
      width: 140px;
  height: 91px;
  padding-left: 22%;
  padding-top: 10%;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 75px;
  line-height: 91px;
  /* identical to box height */
  
  
  
  color: #FFFFFF;
  }
  .f1-div4{
      width: 435px;
  height: 172px;
  left: 1230px;
  top: 47px;
  
  background: #FFFFFF;
  box-shadow: 0px 6px 5px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
      
  }
  .fl-div4P{
      width: 141px;
  height: 24px;
  left: 1245px;
  top: 55px;
  padding-top: 2%;
  padding-left: 2%;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  
  color: #686868;
  
  }
  .sl-div1{
      width: 723px;
      height: 314px;
      left: 252px;
      top: 248px;
  
      background: #FFFFFF;
      box-shadow: 0px 6px 5px rgba(0, 0, 0, 0.15);
      border-radius: 20px;
  
  }
  .sl-div1p{
      width: 176px;
  height: 24px;
  left: 269px;
  top: 259px;
  margin-bottom: 5%;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  padding-top: 2%;
  padding-left: 2%;
  color: #686868;
  
  }
  .sl-div2{
      width: 670px;
  height: 315px;
  left: 995px;
  top: 247px;
  
  background: #FFFFFF;
  box-shadow: 0px 6px 5px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
  }
  .sl-div2p{
      width: 189px;
      height: 24px;
      left: 1002px;
      top: 267px;
      margin-left: 2%;
      margin-top: 2%;
      margin-bottom: 7%;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 24px;
      background-color: #05758A;
      color: #FFFFFF;
      
  }
  .container{
      display: grid;
      margin-top: 2%;
      grid-template-columns: 351px 351px 670px  ;
     grid-template-rows: 130px;
      gap: 1%;
  }
  
  .item1{
      width: 351px;
      height: 112px;
      left: 252px;
      top: 591px;
      margin-left: 65%;
      background: #05758A;
      box-shadow: 0px 6px 5px rgba(0, 0, 0, 0.15);
      border-radius: 20px;
  }
  .item2{
      width: 351px;
      height: 112px;
      left: 624px;
      top: 591px;
      margin-left: 65%;
      background: #05758A;
      box-shadow: 0px 6px 5px rgba(0, 0, 0, 0.15);
      border-radius: 20px;
  }
  .item3{
      width: 670px;
      height: 457px;
      left: 995px;
      top: 591px;
      margin-left: 34%;
      background: #FFFFFF;
      box-shadow: 0px 6px 5px rgba(0, 0, 0, 0.15);
      border-radius: 20px;
  }
  .item4{
     
      width: 723px;
      height: 316px;
      left: 252px;
      top: 732px;
     margin-left: 65%;
      background: #FFFFFF;
      box-shadow: 0px 6px 5px rgba(0, 0, 0, 0.15);
      border-radius: 20px;
  }
  .lastline-div{
      width: 1413px;
  height: 460px;
  left: 252px;
  top: 1077px;
  margin-top: 2%;
  margin-left: 12%;
  background: #FFFFFF;
  box-shadow: 0px 6px 5px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
  margin-bottom:5%;
  }
  .lldiv{
      width: 54px;
  height: 24px;
  left: 269px;
  top: 1092px;
  padding-top: 2%;
  padding-left: 2%;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  padding-bottom: 5%;
  color: #686868;
  
  }
  .d7{
      position: absolute;
      width: 351px;
      height: 112px;
      left: 252px;
      top: 591px;
      
      background: #05758A;
      box-shadow: 0px 6px 5px rgba(0, 0, 0, 0.15);
      border-radius: 20px;
  }
  .d7-p{
     
  width: 96px;
  height: 24px;
  left: 269px;
  top: 602px;
  background-color: #05758A;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  margin-top: 2%;
  margin-left: 2%;
  color: #FFFFFF;
  
  }
  .tr-7{
      background-color:#05758A;
      margin-left: 3%;
     margin-bottom: 10%;
  }
  .td-7{
    background-color: #05758A; text-align: center;
    width: 22px;
    height: 22px;
    left: 526px;
    top: 666px;
    
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    /* identical to box height */
    
    text-align: center;
    
    color: #FFFFFF;
  }
  .th-7{
      background-color:#05758A;
  text-align: center;

  width: 94px;
  height: 20px;
  left: 356px;
  top: 88px;
  margin-top: 5%;
  background: white;
  border-radius: 77px;
  color:#686868 ;
  }
  .tab-1{
      
      margin-left: 29%;
    
     table-layout: none;
  }
  .tr-1{
     background-color: white;
     margin-left: 3%;
    margin-bottom: 10%;
  }
  .td{
      background-color: white;
      text-align: center;
  }
  .th-1{
      background-color: white;
    color: #FFFFFF;
  width: 94px;
  height: 20px;
  left: 356px;
  top: 88px;
  text-align: center;
  margin-top: 5%;
  background: #05758A;
  border-radius: 77px;
  }
    </style>
    <div class="main-divv">
<div class="firstLine-div">
<div class="fl-div1">
    <div class="fl-div1P">Lead Temperature</div>
   
      
      <table class="tab-1">
       
        <tr class="tr-1">
          <th class="th-1">Week</th>
          <th class="th-1">Month</th>
          <th class="th-1">3 Month</th>
        </tr>
        <tr>
          <td class="td">2</td>
          <td class="td">15</td>
          <td class="td">75</td>
        </tr>
        <tr>
          <td class="td">3</td>
          <td class="td">20</td>
          <td class="td">150</td>
        </tr>
        <tr>
          <td class="td">75</td>
          <td class="td">100</td>
          <td class="td">300</td>
        </tr>
      </table>
</div>
<div class="fl-div2">
    <div class="fl-div2P">Appointments</div>
    <div class="fl-div2P1"><ul>
        <li>Completed<span style="margin-left:315% ;">2</span></li>
        <li>Pending<span style="margin-left:380% ;">7</span></li>
        <li>DueOder<span style="margin-left:340% ;">14</span></li>
        <li>Cancled<span style="margin-left:380% ;">2</span></li>
    </ul></div>
</div>
<div class="fl-div3">
    <div class="fl-div3P">Leads Under Drip</div>
    <div class="fl-div3P1">100</div>
</div>
<div class="f1-div4">
<div class="fl-div4P">
    Telemarketing
</div>
 
<table class="tab-1">
       
  <tr class="tr-1">
    <th class="th-1">Week</th>
    <th class="th-1">Month</th>
    <th class="th-1">3 Month</th>
  </tr>
  <tr>
    <td class="td">2</td>
    <td class="td">15</td>
    <td class="td">75</td>
  </tr>
  <tr>
    <td class="td">3</td>
    <td class="td">20</td>
    <td class="td">150</td>
  </tr>
  <tr>
    <td class="td">75</td>
    <td class="td">100</td>
    <td class="td">300</td>
  </tr>
  <tr>
    <td class="td">75</td>
    <td class="td">100</td>
    <td class="td">300</td>
  </tr>
</table>
</div>
</div>

<div class="SecondLine-div">

<div class="sl-div1">
    <div class="sl-div1p">SMS In/Out Graph</div>
    <img src="Chart.png"/>
</div>

<div class="sl-div2"> 
    <div class="sl-div2p">Marketing Expense</div>
<img src="Chart1.png"/></div>

</div>


<div>
<div class="container">
<div class="item1"> 
    <p class="d7-p">Text Lead</p>
    <table style="margin-left:5% ; margin-bottom: 5%; background-color: #05758A;">
     
      <tr class="tr-7" >
        <th class="th-7">Week</th>
        <th class="th-7">Month</th>
        <th class="th-7">3 Month</th>
      </tr>
      <tr>
        <td class="td-7" >2</td>
        <td class="td-7" >15</td>
        <td class="td-7">75</td>
      </tr>
      </table></div>
<div class="item2"><p class="d7-p">Call Leads</p>
    <table style="margin-left:5% ; margin-bottom: 5%; background-color: #05758A;">
     
      <tr class="tr-7" >
        <th class="th-7">Week</th>
        <th class="th-7">Month</th>
        <th class="th-7">3 Month</th>
      </tr>
      <tr>
        <td class="td-7" >2</td>
        <td class="td-7" >15</td>
        <td class="td-7">75</td>
      </tr>
      </table></div>
<div class="item3">3</div>
<div class="item4">4</div>
</div>



<div class="lastline-div">
<div class="lldiv">
    Profit
</div>
<img src="Chart3.png"/>
</div>






    </div>`;
    // document.body.appendChild(injectElement);
    document.body.prepend(injectElement);
    // var markup = document.documentElement.innerHTML;
    // alert(markup);
 
}
 init();
 





















