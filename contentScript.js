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
  injectElement.className = '360Synergy';
  html =document.getElementsByTagName('html')[0].outerHTML;
  injectElement.innerHTML = ` <style> console
  /* *{
      font-family: 'Inter', sans-serif;
    } */
    /* *{
      background-color:#F5F5F5; 
    } */
    body{
      background-color: #F5F5F5;;
    }
    .grid-container {
        display: grid;
        grid-template-columns: 428px  275px 215px 435px;
      
      
      }
      .grid-container1{
        display: grid;
        grid-template-columns: 723px 670px;
       
      }
      .grid-container-last {
        display: grid;
        grid-template-columns: 1413px  ;
      
      
      }
      .gia{
        width: 176px;
    height: 24px;
    left: 269px;
    top: 259px;
    
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    padding-left: 2%;
    padding-top: 2%;
    color: #686868;
      }
      .grid-item {
        // position: absolute;
        width: 428px;
        height: 172px;
        left: 252px;
        top: 47px;
        margin-left: 58%;
        margin-top: 15%;
        margin-bottom: -50%;
        background: #FFFFFF;
        box-shadow: 0px 6px 5px rgba(0, 0, 0, 0.15);
        border-radius: 20px;
      }
      .grid-item1 {
        // position: absolute;
        width: 275px;
        height: 172px;
        left: 700px;
        top: 47px;
        margin-left: 98%;
    margin-top: 24%;
    margin-bottom: -85%;

        background: #FFFFFF;
        box-shadow: 0px 6px 5px rgba(0, 0, 0, 0.15);
        border-radius: 20px;
    }
    .grid-item2 {
        // position: absolute;
        width: 215px;
        height: 172px;
        left: 995px;
        top: 47px;
        margin-left: 135%;
        margin-top: 30%;
        margin-bottom: -108%;
        background: #05758A;
        box-shadow: 0px 6px 5px rgba(0, 0, 0, 0.15);
        border-radius: 20px;
    }
    .grid-item3 {
        // position: absolute;
        width: 435px;
        height: 172px;
        left: 1230px;
        top: 47px;
        margin-bottom: -53%;
    margin-top: 15%;
    margin-left: 70%;
        background: #FFFFFF;
        box-shadow: 0px 6px 5px rgba(0, 0, 0, 0.15);
        border-radius: 20px;
    }
    .grid-item1a{
      width: 723px;
    height: 315px;
    left: 252px;
    top: 248px;
    
    background: #FFFFFF;
    box-shadow: 0px 6px 5px rgba(0, 0, 0, 0.15);
    border-radius: 20px;
    margin-top: 32%;
    margin-left: 34%;
    }
    .grid-item1b{
      width: 670px;
      height: 315px;
      left: 995px;
      top: 247px;
      
      background: #FFFFFF;
      box-shadow: 0px 6px 5px rgba(0, 0, 0, 0.15);
      border-radius: 20px;
      margin-top: 34.5%;
      margin-left: 40%;
    }
    .fl-div1{
       
      width: 179px;
      height: 24px;
      left: 269px;
      top: 55px;
      
      font-family: 'Inter', sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 24px;
      
      color: #686868;
      padding-left: 2%;
    padding-top: 2%;
    padding-bottom: 2%;
    }
    .t-1{
       margin-left:28%  
     
    }
    .th-1{
      width: 94px;
    height: 20px;
    left: 356px;
    top: 88px;
    text-align: center;
    background: #05758A;
    border-radius: 77px;
    
    }
    .th-s1{
      width: 38px;
    height: 17px;
    left: 385px;
    top: 89px;
    
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */
    
    
    color: #FFFFFF;
    }
    
    .td-1{
      width: 32px;
    height: 22px;
    left: 292px;
    top: 125px;
    
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    /* identical to box height */
    padding-left:1%;
    padding-right:46px;
    
    color: #686868;
    padding-bottom: 1%;
    }
    .td-2{
      width: 11px;
      height: 22px;
      left: 397px;
      top: 125px;
      
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 22px;
      /* identical to box height */
      
      text-align: center;
      
      color: #686868;
    
    color: #686868;
    padding-left: 10%;
    padding-right: 80px;
    }
    .td-3{
      width: 22px;
      height: 22px;
      left: 1378px;
      top: 117px;
      
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 22px;
      /* identical to box height */
      
      text-align: center;
      
      color: #686868;
    /* identical to box height */
    padding-left: 65%;
    text-align: center;
    
    color: #686868;
    padding-left: 13%;
    padding-right: 60px;
    }
    .d-2{
      width: 169px;
      height: 24px;
      left: 1019px;
      top: 55px;
      
      font-family: 'Inter';
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 24px;
      
      color: #FFFFFF;
      padding-left: 10%;
      padding-top: 2%;
    }
    .d-2a{
      width: 140px;
      height: 91px;
      left: 1032px;
      top: 106px;
      
      font-family: 'Inter';
      font-style: normal;
      font-weight: 700;
      font-size: 75px;
      line-height: 91px;
      /* identical to box height */
      
      text-align: center;
      
      color: #FFFFFF;
      padding-left: 17%;
      padding-top: 12%;
    }
    .trr1{
      border-radius: 70%; width:25px; font-size: 15px; background-color: #FF8B38;  padding-left: 9px; color:#FF8B38;margin-left: 2%;
    }
    .trr2{
      border-radius: 70%; width:25px; font-size: 15px; background-color: #FFC738;  padding-left: 9px; color:#FFC738;margin-left: 2%;
    }
    .trr3{
      border-radius: 70%; width:25px; font-size: 15px; background-color: #38ABFF;  padding-left: 9px; color:#38ABFF;margin-left: 2%;
    }
    .d-3{
      width: 140px;
    height: 24px;
    left: 715px;
    top: 55px;
    
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    
    color: #686868;
    padding-left: 2%;
    padding-top: 2%;
    padding-bottom: 6%;
    }
    ul li{
      list-style: none;
    }
    .l1{
      width: 96px;
    height: 22px;
    left: 743px;
    top: 116px;
    padding-bottom: 1%;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    /* identical to box height */
    
    
    color: #686868;
    }
    
    .li1a{
      border-radius: 70%; width:25px; font-size: 15px;   padding-left: 9px;  margin-right: 8%; margin-left: 25% ;
    }
    .sp1{
      margin-left:89% ;
      width: 11px;
    height: 22px;
    left: 944px;
    top: 116px;
    
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    /* identical to box height */
    
    text-align: center;
    
    color: #686868;
    /* identical to box height */
    
    text-align: center;
    
    color: #686868;
    
    }
    .sp2{
      margin-left:115% ;
      width: 11px;
      height: 22px;
      left: 944px;
      top: 138px;
      
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 22px;
      /* identical to box height */
      
      text-align: center;
      
      color: #686868;
      
    }
    .sp3{
      margin-left:93% ;
      width: 11px;
    height: 22px;
    left: 944px;
    top: 138px;
    
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    /* identical to box height */
    
    text-align: center;
    
    color: #686868;
    
    }
    .sp4{
      margin-left:115% ;
      width: 11px;
      height: 22px;
      left: 944px;
      top: 138px;
      
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 22px;
      /* identical to box height */
      
      text-align: center;
      
      color: #686868;
      
    }
    .td-1a{
      width: 32px;
      height: 22px;
      left: 292px;
      top: 125px;
      
      font-family: 'Inter';
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 22px;
      /* identical to box height */
      padding-left:3%;
      padding-right:36px;
      
      color: #686868;
     
    }
    .img1{
      width: 706px;
    height: 212px;
    left: 250px;
    top: 325px;
    padding-top: 5%;
    }
    .img2{
      width: 668px;
      height: 200px;
      left: 986px;
      top: 331px;
    padding-top: 4%;
    
    }
    .ut{
      width: 53px;
    height: 15px;
    left: 727px;
    top: 537px;
    
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    /* identical to box height */
    
    
    color: #686868;
    }
    .bts{
    
      width: 53px;
      height: 15px;
      left: 727px;
      top: 537px;
      
      font-family: 'Inter';
      font-style: normal;
      font-weight: 600;
      font-size: 12px;
      line-height: 15px;
      /* identical to box height */
    
      color: #686868;
    
      border-radius: 70%; width:25px; font-size: 15px; 
             padding-left: 9px; margin-right: 1%;
    }
    .item3d1{
        
      width: 670px;
      height: 26px;
      left: 995px;
      top: 634px;
      margin-bottom: 2%;
      margin-top: 2%;
      background: #05758A;
    }
    .th-111{
      width: 189px;
    height: 24px;
    left: 1002px;
    top: 267px;
    padding-right: 166px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    
    color: #FFFFFF;
    }
    .th-121{
      width: 94px;
    height: 20px;
    left: 1343px;
    top: 269px;
    text-align: center;
    background: #FFC738;
    border-radius: 77px;
    
    font-family: 'Inter', sans-serif;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */
    
    
    color: #686868;
    
    }
    #speedChart{
      width: 706px;
    height: 420px;
    left: 250px;
    top: 325px;
    margin-top: 6%;
    }
    .canvasjs-chart-credit{
      display: none;
    }
    // canvas{
    
    //   width: 706px !important;
    //   height: 212px !important;
    // }
    // #chartContainer canvas{
    //   width: 1176px !important;
    // height: 352px !important;
    // }
    // #chart{
    //   width:668px !important;
    //   height: 200px !important;
    // }
    #chartContainer{
       height: 352px !important;
        width: 1176px !important;
       margin-left: 5%;
       padding-top: 1%;
    }
    // .chart-container {
    //   position: relative;
    //   margin: auto;
    //   height: 200px;
    //   width: 668px;
    //   margin-top: 6%;
    // }
    .container3{
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
    
    background: #05758A;
    box-shadow: 0px 6px 5px rgba(0, 0, 0, 0.15);
    border-radius: 20px;
      border-radius: 20px;
      margin-top: 1%;
      margin-left: 70%;
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
      .td7{
        margin-left:9% ; margin-bottom: 5%; background-color: #05758A;
    
    }
    .tr-7{
      background-color:#05758A;
      margin-left: 3%;
     margin-bottom: 10%;
    
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
    font-family: Inter;
    font-size: 14px;
    font-weight: 500;
    line-height: 17px;
    letter-spacing: 0em;
    
    
    }
    .td-7{
      background-color: #05758A; text-align: center;
      width: 22px;
      height: 22px;
      left: 526px;
      top: 666px;
      padding-top: 2%;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 22px;
      /* identical to box height */
      
      text-align: center;
      
      color: #FFFFFF;
    }
    .item2{
      width: 351px;
    height: 112px;
    left: 624px;
    top: 591px;
    
    background: #05758A;
    box-shadow: 0px 6px 5px rgba(0, 0, 0, 0.15);
    border-radius: 20px;
      margin-top: 1%;
      margin-left: 71%;
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
      .item3d{
        width: 105px;
    height: 24px;
    left: 1012px;
    top: 603px;
    margin-top: 2%;
    margin-left: 2%;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    
    color: #686868;
    }
    .item3d1{
            
      width: 669px;
      height: 26px;
      left: 995px;
      top: 634px;
      margin-bottom: 2%;
      margin-top: 2%;
      background: #05758A;
    }
    .item3{
      width: 670px;
    height: 457px;
    left: 995px;
    top: 591px;
    
    background: #FFFFFF;
    box-shadow: 0px 6px 5px rgba(0, 0, 0, 0.15);
    border-radius: 20px;
      margin-left: 37%;
    }
    .td-11{
      width: 12px;
    height: 22px;
    left: 1020px;
    top: 636px;
    
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    /* identical to box height */
    
    
    color: #FFFFFF;
    
    }
    .th-11{
      width: 12px;
    height: 22px;
    left: 1020px;
    top: 636px;
    
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    /* identical to box height */
    
    padding-left: 0%;
    color: #FFFFFF;
    
    }
    .th-11a{
      width: 12px;
    height: 22px;
    left: 1020px;
    top: 636px;
    margin-left:1%;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    /* identical to box height */
    padding-right: 12%;
    padding-left: 0%;
    color: #FFFFFF;
    
    }
    .th-12{
      
      width: 94px;
      height: 20px;
      left: 1332px;
      top: 637px;
      text-align: center;
      background: #FF8B38;
      border-radius: 77px;
    
      width: 18%;
    height: 17px;
    left: 1361px;
    top: 638px;
    
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */
    
    
    color: #FFFFFF;
      }
      .td-12{
          width: 9px;
    height: 22px;
    left: 1022px;
    top: 672px;
    
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    /* identical to box height */
    
    text-align: center;
    border-radius: 50%; width:25px; background-color: #05758A; margin-left: 32%; padding-left: 3px; box-sizing: border-box;
    color: #FFFFFF;
    
      }
      .td-12a{
          width: 24px;
          height: 24px;
          left: 1070px;
          top: 670px;
          background: url("https://github.com/MuhammadTahaSheikh/Extension/blob/master/image/Ellipse%2027.png?raw=true");
        margin-left: 270%;
    
      }
      .td-12b{
          width: 61px;
          height: 22px;
          left: 1100px;
          top: 671px;
          
          font-family: 'Inter';
          font-style: normal;
          font-weight: 400;
          font-size: 18px;
          line-height: 22px;
          /* identical to box height */
          margin-top: 15%;
          
          color: #686868;
          /* identical to box height */
          margin-left:123% ;
         
          color: #686868;
    
      }
      .td-12c{
          width: 33px;
    height: 22px;
    left: 1364px;
    top: 671px;
    
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    /* identical to box height */
    
    margin-left: 890%;
    
    color: #686868;
      }
      .td-12d{
          width: 33px;
    height: 22px;
    left: 1364px;
    top: 671px;
    
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    /* identical to box height */
    
    margin-left: 1135%;
    
    color: #686868;
      }
      .td-12e{
        width: 33px;
        height: 22px;
        left: 1364px;
        top: 671px;
        
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        /* identical to box height */
        
        text-align: center;
        
        color: #686868;
        
    /* identical to box height */
    
    margin-left: 1381%;
    
    color: #686868;
      }
    .item4d1{
      width: 237px;
    height: 24px;
    left: 269px;
    top: 745px;
    padding-left: 2%;
    padding-top: 2%;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    
    color: #686868;
    
    }
    .item4d2{
      width: 723px;
    height: 26px;
    left: 252px;
    top: 776px;
    
    background: #05758A;
    }
    .item4{
      width: 723px;
    height: 316px;
    left: 252px;
    top: 732px;
    
    background: #FFFFFF;
    box-shadow: 0px 6px 5px rgba(0, 0, 0, 0.15);
    border-radius: 20px;
    margin-left: 70%;
    }
    .th-41{
      width: 12px;
      height: 22px;
      left: 277px;
      top: 778px;
      
      font-family: 'Inter';
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 22px;
      /* identical to box height */
      
      padding-left: 4%;
      color: #FFFFFF;
    }
    .th-42{
      width: 51px;
      height: 22px;
      left: 381px;
      top: 778px;
      padding-left: 15%;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 22px;
      /* identical to box height */
      padding-left: 5%;
      
      color: #FFFFFF;
    }
    .th-43{
      width: 53px;
      height: 22px;
      left: 791px;
      top: 778px;
      
      font-family: 'Inter';
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 22px;
      /* identical to box height */
      padding-left: 19%;
      
      color: #FFFFFF;
    }
    .td-41a{
      width: 9px;
      height: 22px;
      left: 1022px;
      top: 672px;
      
      font-family: 'Inter';
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 22px;
      /* identical to box height */
    
      text-align: center;
      border-radius: 50%; width:25px; background-color: #05758A; margin-left: 102%; padding-left: 3px; box-sizing: border-box;
      color: #FFFFFF;
      
      
    }
    .td-41b{
      width: 155px;
    height: 22px;
    left: 312px;
    top: 813px;
    padding-bottom: 5%;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    /* identical to box height */
    margin-left: 52%;
    text-align: center;
    margin-left: 80%;
    color: #686868;
    
    }
    .td-41c{
      width: 22px;
    height: 22px;
    left: 807px;
    top: 812px;
    
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    /* identical to box height */
    padding-left: 1925%;
    text-align: center;
    padding-left: 1915%;
    color: #686868;
    
    
    }
    .td-1{
      width: 32px;
    height: 22px;
    left: 292px;
    top: 125px;
    
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    /* identical to box height */
    
    color: #686868;
    
    }
    .grid-last{
      width: 1413px;
    height: 460px;
    left: 252px;
    top: 1077px;
    
    background: #FFFFFF;
    box-shadow: 0px 6px 5px rgba(0, 0, 0, 0.15);
    border-radius: 20px;
    margin-left: 17.5%;
    margin-top: 2%;
    margin-bottom: 2%;
    }
    .img3{
      width: 1176px;
    height: 352px;
    left: 309px;
    top: 1169px;
    padding-top: 3%;
    padding-left: 5%;
    }
    .ll{
      width: 54px;
    height: 24px;
    left: 269px;
    top: 1092px;
    
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    
    color: #686868;
    padding-top: 2%;
    padding-left: 2%;
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    @media (max-width:1366px){
    /* *{
      font-family: 'Inter', sans-serif;
    } */
    /* *{
      background-color:#F5F5F5; 
    } */
    body{
      background-color: #F5F5F5;;
    }
    .grid-container {
        display: grid;
        grid-template-columns: 428px  275px 215px 435px;
      
      
      }
      .grid-container1{
        display: grid;
        grid-template-columns: 723px 670px;
       
      }
      .grid-container-last {
        display: grid;
        grid-template-columns: 1413px  ;
      
      
      }
      .gia{
        width: 176px;
    height: 24px;
    left: 269px;
    top: 259px;
    
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    padding-left: 2%;
    padding-top: 2%;
    color: #686868;
      }
      .grid-item {
        // position: absolute;
        width: 404px;
        height: 172px;
        left: 16px;
        top: 47px;
        margin-left: 1%;
    margin-top: 17%;
    margin-bottom: -51%;
        background: #FFFFFF;
        box-shadow: 0px 6px 5px rgba(0, 0, 0, 0.15);
        border-radius: 20px;
      }
      .grid-item1 {
        // position: absolute;
        width: 275px;
        height: 172px;
        left: 432px;
        top: 47px;
        margin-top: 26%;
        margin-left: -3%;
        margin-bottom: -76%;
        background: #FFFFFF;
        box-shadow: 0px 6px 5px rgba(0, 0, 0, 0.15);
        border-radius: 20px;
    }
    .grid-item2 {
        // position: absolute;
        width: 215px;
        height: 172px;
        left: 718px;
        top: 47px;
        margin-left: 1%;
        margin-top: 35%;
        margin-bottom: -113%;
        background: #05758A;
        box-shadow: 0px 6px 5px rgba(0, 0, 0, 0.15);
        border-radius: 20px;
    }
    .grid-item3 {
        // position: absolute;
        width: 404px;
        height: 172px;
        left: 943px;
        top: 47px;
        margin-top: 17%;
    margin-left: 3%;
    margin-bottom: -101%;
        background: #FFFFFF;
        box-shadow: 0px 6px 5px rgba(0, 0, 0, 0.15);
        border-radius: 20px;
    }
    .grid-item1a{
      width: 693px;
    height: 315px;
    left: 252px;
    top: 248px;
    
    background: #FFFFFF;
    box-shadow: 0px 6px 5px rgba(0, 0, 0, 0.15);
    border-radius: 20px;
    margin-top: 32%;
    margin-left: 1%;
    }
    .grid-item1b{
      width: 624px;
      height: 315px;
      left: 995px;
      top: 247px;
      
      background: #FFFFFF;
      box-shadow: 0px 6px 5px rgba(0, 0, 0, 0.15);
      border-radius: 20px;
      margin-top: 34.5%;
      margin-left: -2%;
    }
    .fl-div1{
       
      width: 179px;
      height: 24px;
      left: 269px;
      top: 55px;
      
      font-family: 'Inter', sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 24px;
      
      color: #686868;
      padding-left: 2%;
    padding-top: 2%;
    padding-bottom: 2%;
    }
    .t-1{
       margin-left:28%  
     
    }
    .th-1{
      width: 94px;
    height: 20px;
    left: 356px;
    top: 88px;
    
    background: #05758A;
    border-radius: 77px;
    
    }
    .th-s1{
      width: 38px;
    height: 17px;
    left: 385px;
    top: 89px;
    
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */
    
    
    color: #FFFFFF;
    }
    
    .td-1{
      width: 32px;
    height: 22px;
    left: 292px;
    top: 125px;
    
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    /* identical to box height */
    padding-left:1%;
    padding-right:46px;
    
    color: #686868;
    padding-bottom: 1%;
    }
    .td-2{
      width: 11px;
      height: 22px;
      left: 397px;
      top: 125px;
      
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 22px;
      /* identical to box height */
      
      text-align: center;
      
      color: #686868;
    
    color: #686868;
    padding-left: 7%;
    padding-right: 80px;
    }
    .td-3{
      width: 22px;
      height: 22px;
      left: 1378px;
      top: 117px;
      
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 22px;
      /* identical to box height */
      
      text-align: center;
      
      color: #686868;
    /* identical to box height */
    padding-left: 65%;
    text-align: center;
    
    color: #686868;
    padding-left: 7%;
    padding-right: 60px;
    }
    .d-2{
      width: 169px;
      height: 24px;
      left: 1019px;
      top: 55px;
      
      font-family: 'Inter';
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 24px;
      
      color: #FFFFFF;
      padding-left: 10%;
      padding-top: 2%;
    }
    .d-2a{
      width: 140px;
      height: 91px;
      left: 1032px;
      top: 106px;
      
      font-family: 'Inter';
      font-style: normal;
      font-weight: 700;
      font-size: 75px;
      line-height: 91px;
      /* identical to box height */
      
      text-align: center;
      
      color: #FFFFFF;
      padding-left: 17%;
      padding-top: 12%;
    }
    .trr1{
      border-radius: 70%; width:25px; font-size: 15px; background-color: #FF8B38;  padding-left: 9px; color:#FF8B38;margin-left: 2%;
    }
    .trr2{
      border-radius: 70%; width:25px; font-size: 15px; background-color: #FFC738;  padding-left: 9px; color:#FFC738;margin-left: 2%;
    }
    .trr3{
      border-radius: 70%; width:25px; font-size: 15px; background-color: #38ABFF;  padding-left: 9px; color:#38ABFF;margin-left: 2%;
    }
    .d-3{
      width: 140px;
    height: 24px;
    left: 715px;
    top: 55px;
    
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    
    color: #686868;
    padding-left: 2%;
    padding-top: 2%;
    padding-bottom: 6%;
    }
    ul li{
      list-style: none;
    }
    .l1{
      width: 96px;
    height: 22px;
    left: 743px;
    top: 116px;
    padding-bottom: 1%;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    /* identical to box height */
    
    
    color: #686868;
    }
    
    .li1a{
      border-radius: 70%; width:25px; font-size: 15px;   padding-left: 9px;  margin-right: 8%;
    }
    .sp1{
      margin-left:89% ;
      width: 11px;
    height: 22px;
    left: 944px;
    top: 116px;
    
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    /* identical to box height */
    
    text-align: center;
    
    color: #686868;
    /* identical to box height */
    
    text-align: center;
    
    color: #686868;
    
    }
    .sp2{
      margin-left:115% ;
      width: 11px;
      height: 22px;
      left: 944px;
      top: 138px;
      
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 22px;
      /* identical to box height */
      
      text-align: center;
      
      color: #686868;
      
    }
    .sp3{
      margin-left:93% ;
      width: 11px;
    height: 22px;
    left: 944px;
    top: 138px;
    
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    /* identical to box height */
    
    text-align: center;
    
    color: #686868;
    
    }
    .sp4{
      margin-left:115% ;
      width: 11px;
      height: 22px;
      left: 944px;
      top: 138px;
      
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 22px;
      /* identical to box height */
      
      text-align: center;
      
      color: #686868;
      
    }
    .td-1a{
      width: 32px;
      height: 22px;
      left: 292px;
      top: 125px;
      
      font-family: 'Inter';
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 22px;
      /* identical to box height */
      padding-left:3%;
      padding-right:36px;
      
      color: #686868;
     
    }
    .img1{
      width: 706px;
    height: 212px;
    left: 250px;
    top: 325px;
    padding-top: 5%;
    }
    .img2{
      width: 668px;
      height: 200px;
      left: 986px;
      top: 331px;
    padding-top: 4%;
    
    }
    .ut{
      width: 53px;
    height: 15px;
    left: 727px;
    top: 537px;
    
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    /* identical to box height */
    
    
    color: #686868;
    }
    .bts{
    
      width: 53px;
      height: 15px;
      left: 727px;
      top: 537px;
      
      font-family: 'Inter';
      font-style: normal;
      font-weight: 600;
      font-size: 12px;
      line-height: 15px;
      /* identical to box height */
    
      color: #686868;
    
      border-radius: 70%; width:25px; font-size: 15px; 
             padding-left: 9px; margin-right: 1%;
    }
    .item3d1{
        
      width: 620px;
      height: 26px;
      left: 995px;
      top: 634px;
      margin-bottom: 2%;
      margin-top: 2%;
      background: #05758A;
    }
    .th-111{
      width: 189px;
    height: 24px;
    left: 1002px;
    top: 267px;
    padding-right: 166px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    
    color: #FFFFFF;
    }
    .th-121{
      width: 94px;
    height: 20px;
    left: 1343px;
    top: 269px;
    text-align: center;
    background: #FFC738;
    border-radius: 77px;
    
    font-family: 'Inter', sans-serif;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */
    
    
    color: #686868;
    
    }
    #speedChart{
      width: 706px;
    height: 420px;
    left: 250px;
    top: 325px;
    margin-top: 6%;
    }
    .canvasjs-chart-credit{
      display: none;
    }
    canvas{
    
      width: 693px !important;
      height: 212px !important;
    }
    #chartContainer canvas{
      width: 1176px !important;
    height: 352px !important;
    }
    #chart{
      width:624px !important;
      height: 200px !important;
    }
    #chartContainer{
       height: 352px !important;
        width: 1176px !important;
       margin-left: 5%;
       padding-top: 1%;
    }
    .chart-container {
      position: relative;
      margin: auto;
      height: 200px;
      width: 668px;
      margin-top: 6%;
    }
    .container3{
      display: grid;
      margin-top: 2%;
      grid-template-columns: 351px 351px 670px  ;
     grid-template-rows: 130px;
      gap: 1%;
    }
    .item1{
      width: 342px;
    height: 112px;
    left: 252px;
    top: 591px;
    
    background: #05758A;
    box-shadow: 0px 6px 5px rgba(0, 0, 0, 0.15);
    border-radius: 20px;
      border-radius: 20px;
      margin-top: 1%;
      margin-left: 1%;
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
      .td7{
        margin-left:9% ; margin-bottom: 5%; background-color: #05758A;
    
    }
    .tr-7{
      background-color:#05758A;
      margin-left: 3%;
     margin-bottom: 10%;
    
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
    font-family: Inter;
    font-size: 14px;
    font-weight: 500;
    line-height: 17px;
    letter-spacing: 0em;
    
    
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
    .item2{
      width: 342px;
    height: 112px;
    left: 624px;
    top: 591px;
    
    background: #05758A;
    box-shadow: 0px 6px 5px rgba(0, 0, 0, 0.15);
    border-radius: 20px;
      margin-top: 1%;
      margin-left: -2%;
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
      .item3d{
        width: 105px;
    height: 24px;
    left: 1012px;
    top: 603px;
    margin-top: 2%;
    margin-left: 2%;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    
    color: #686868;
    }
    .item3d1{
            
      width: 622px;
      height: 26px;
      left: 995px;
      top: 634px;
      margin-bottom: 2%;
      margin-top: 2%;
      background: #05758A;
    }
    .item3{
      width: 627px;
    height: 457px;
    left: 995px;
    top: 591px;
    
    background: #FFFFFF;
    box-shadow: 0px 6px 5px rgba(0, 0, 0, 0.15);
    border-radius: 20px;
      margin-left: -3%;
    }
    .td-11{
      width: 12px;
    height: 22px;
    left: 1020px;
    top: 636px;
    
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    /* identical to box height */
    
    
    color: #FFFFFF;
    
    }
    .th-11{
      width: 12px;
    height: 22px;
    left: 1020px;
    top: 636px;
    
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    /* identical to box height */
    
    padding-left: 0%;
    color: #FFFFFF;
    
    }
    .th-11a{
      width: 12px;
    height: 22px;
    left: 1020px;
    top: 636px;
    margin-left:1%;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    /* identical to box height */
    padding-right: 12%;
    padding-left: 0%;
    color: #FFFFFF;
    
    }
    .th-12{
      
      width: 94px;
      height: 20px;
      left: 1332px;
      top: 637px;
      text-align: center;
      background: #FF8B38;
      border-radius: 77px;
    
      width: 18%;
    height: 17px;
    left: 1361px;
    top: 638px;
    
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */
    
    
    color: #FFFFFF;
      }
      .td-12{
          width: 9px;
    height: 22px;
    left: 1022px;
    top: 672px;
    
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    /* identical to box height */
    
    text-align: center;
    border-radius: 50%; width:25px; background-color: #05758A; margin-left: 32%; padding-left: 3px; box-sizing: border-box;
    color: #FFFFFF;
    
      }
      .td-12a{
          width: 24px;
          height: 24px;
          left: 1070px;
          top: 670px;
          background: url("https://github.com/MuhammadTahaSheikh/Extension/blob/master/image/Ellipse%2027.png?raw=true");
        margin-left: 270%;
    
      }
      .td-12b{
          width: 61px;
          height: 22px;
          left: 1100px;
          top: 671px;
          
          font-family: 'Inter';
          font-style: normal;
          font-weight: 400;
          font-size: 18px;
          line-height: 22px;
          /* identical to box height */
          
          
          color: #686868;
          /* identical to box height */
          margin-left:123% ;
         
          color: #686868;
    
      }
      .td-12c{
          width: 33px;
    height: 22px;
    left: 806px;
    top: 671px;
    
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    /* identical to box height */
    
    margin-left: 806%;
    
    color: #686868;
      }
      .td-12d{
          width: 33px;
    height: 22px;
    left: 1033px;
    top: 671px;
    
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    /* identical to box height */
    
    margin-left: 1033%;
    
    color: #686868;
      }
      .td-12e{
        width: 33px;
        height: 22px;
        left: 1245px;
        top: 671px;
        
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        /* identical to box height */
        
        text-align: center;
        
        color: #686868;
        
    /* identical to box height */
    
    margin-left: 1245%;
    
    color: #686868;
      }
    .item4d1{
      width: 237px;
    height: 24px;
    left: 269px;
    top: 745px;
    padding-left: 2%;
    padding-top: 2%;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    
    color: #686868;
    
    }
    .item4d2{
      width: 696px;
    height: 26px;
    left: 252px;
    top: 776px;
    
    background: #05758A;
    }
    .item4{
      width: 696px;
    height: 316px;
    left: 252px;
    top: 732px;
    margin-top: 1%;
    background: #FFFFFF;
    box-shadow: 0px 6px 5px rgba(0, 0, 0, 0.15);
    border-radius: 20px;
    margin-left: 1%;
    }
    .th-41{
      width: 12px;
      height: 22px;
      left: 277px;
      top: 778px;
      
      font-family: 'Inter';
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 22px;
      /* identical to box height */
      
      padding-left: 4%;
      color: #FFFFFF;
    }
    .th-42{
      width: 51px;
      height: 22px;
      left: 381px;
      top: 778px;
      padding-left: 15%;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 22px;
      /* identical to box height */
      padding-left: 5%;
      
      color: #FFFFFF;
    }
    .th-43{
      width: 53px;
      height: 22px;
      left: 791px;
      top: 778px;
      
      font-family: 'Inter';
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 22px;
      /* identical to box height */
      padding-left: 19%;
      
      color: #FFFFFF;
    }
    .td-41a{
      width: 9px;
      height: 22px;
      left: 1022px;
      top: 672px;
      
      font-family: 'Inter';
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 22px;
      /* identical to box height */
    
      text-align: center;
      border-radius: 50%; width:25px; background-color: #05758A; margin-left: 102%; padding-left: 3px; box-sizing: border-box;
      color: #FFFFFF;
      
      
    }
    .td-41b{
      width: 155px;
    height: 22px;
    left: 312px;
    top: 813px;
    padding-bottom: 5%;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    /* identical to box height */
    margin-left: 52%;
    text-align: center;
    margin-left: 80%;
    color: #686868;
    
    }
    .td-41c{
      width: 22px;
    height: 22px;
    left: 807px;
    top: 812px;
    
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    /* identical to box height */
    padding-left: 1806%;
    text-align: center;
    padding-left: 1915%;
    color: #686868;
    
    
    }
    .td-1{
      width: 32px;
    height: 22px;
    left: 292px;
    top: 125px;
    
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    /* identical to box height */
    
    color: #686868;
    
    }
    .grid-last{
      width: 1323px;
    height: 460px;
    left: 252px;
    top: 1077px;
    
    background: #FFFFFF;
    box-shadow: 0px 6px 5px rgba(0, 0, 0, 0.15);
    border-radius: 20px;
    margin-left: 1%;
    margin-top: 2%;
    margin-bottom: 2%;
    }
    .img3{
      width: 1176px;
    height: 352px;
    left: 309px;
    top: 1169px;
    padding-top: 3%;
    padding-left: 5%;
    }
    .ll{
      width: 54px;
    height: 24px;
    left: 269px;
    top: 1092px;
    
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    
    color: #686868;
    padding-top: 2%;
    padding-left: 2%;
    }
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
  </style>
  <main>
<div class="grid-container">
  <div class="grid-item">
  
      <div class="fl-div1">Lead Temperature</div>
      <table class="t-1" >
        <tr >
          <th class="th-1"><span class="th-s1">Week</span></th>
          <th class="th-1"><span class="th-s1">Month</span></th>
          <th class="th-1"><span class="th-s1">3 Month</span></th>
        </tr>
      </table>
      <table>
        <tr>
          <td class="td-1"><span class="trr1">a</span>Hot</td>
          <td class="td-2">2</td>
          <td class="td-2">15</td>
          <td class="td-2">75</td>
        </tr>
        <tr>
          <td class="td-1"><span class="trr2">a</span>Warm</td>
          <td class="td-2">3</td>
          <td class="td-2">20</td>
          <td class="td-2">150</td>
        </tr>
        <tr>
          <td class="td-1"><span class="trr3">a</span>Cold</td>
          <td class="td-2">4</td>
          <td class="td-2">25</td>
          <td class="td-2">300</td>
        </tr>
      </table>
      
      
  </div>
  <div class="grid-item1">
  <div class="d-3"> Appointments</div> 
  <div>
    <ul>
      <li class="l1"><span class="li1a" style=" background-color: #2DC12A;   color:#2DC12A; ">a</span>Completed<span class="sp1">2</span></li>
      <li class="l1"><span class="li1a" style=" background-color: #FFC738;   color:#FFC738; ">a</span>Pending<span class="sp2">7</span></li>
      <li class="l1"><span class="li1a" style=" background-color: #FF8B38;   color:#FF8B38; ">a</span>DueOrder<span class="sp3">14</span></li>
      <li class="l1"><span class="li1a" style=" background-color: #FF3838;   color:#FF3838; ">a</span>Cancled<span class="sp4">2</span></li>
    </ul>
  </div>
  </div>
  <div class="grid-item2">
    <div class="d-2">Leads Under Drip</div>
    <div class="d-2a">100</div>
  </div>  
  <div class="grid-item3">
    <div class="fl-div1">Telemarketing</div>
    <table class="t-1" >
      <tr >
        <th class="th-1"><span class="th-s1">Week</span></th>
        <th class="th-1"><span class="th-s1">Month</span></th>
        <th class="th-1"><span class="th-s1">3 Month</span></th>
      </tr>
    </table>
    <table>
      <tr>
        <td class="td-1a">SMS<span style="color: #2DC12A; background-color: white;padding-left: 4%;">In</span></td>
        <td class="td-3">75</td>
        <td class="td-3">75</td>
        <td class="td-3">75</td>
      </tr>
      <tr>
        <td class="td-1a">SMS<span style="color: #FF3838; background-color: white;padding-left: 4%;">Out</span>
        </td>
        <td class="td-3">75</td>
        <td class="td-3">75</td>
        <td class="td-3">75</td>
      </tr>
      <tr>
        <td class="td-1a">SMS<span style="color: #FFC738; background-color: white;padding-left: 4%;">In</span>
     </td>
        <td class="td-3">150</td>
        <td class="td-3">150</td>
        <td class="td-3">150</td>
      </tr>
      <tr>
        <td class="td-1a">SMS<span style="color: #FF8B38; background-color: white;padding-left: 4%;">Out</span>
     </td>
        <td class="td-3">300</td>
        <td class="td-3">300</td>
        <td class="td-3">300</td>
      </tr>
    </table>
  </div>








</div>
<div class="grid-container1">
<div class="grid-item1a">
  <div class="gia">
    SMS In/Out Graph
  </div>
  <!-- <img src="Chart.png" class="img1"/> -->
  <canvas id="speedChart"  ></canvas>
  <!-- <div  style="text-align: center;">
    <span class="bts" style=" background-color: #2DC12A; 
      color:#2DC12A; ">a</span><span class="ut">SMS In  </span>
     <span class="bts" style=" background-color: #FF3838; 
      color:#FF3838; ">a</span><span class="ut">SMS Out</span>    
     <span class="bts" style=" background-color: #FFC738; 
      color:#FFC738; ">a</span><span class="ut">Calls In </span>
     <span class="bts" style=" background-color: #FF8B38; 
      color:#FF8B38; ">a</span><span class="ut">Calls Out</span>
  </div> -->
</div>
<div class="grid-item1b">
  <table class="item3d1">
    <div>
 
    <th class="th-111">Marketing<span style="margin-left: 1px;">Expense</span></th>
    
      <th class="th-121">Week</th>
      <th class="th-121">Month</th>
      <th class="th-121">3 Month</th>
    
  </div>
 
  </table>
 

  // <div class="chart-container">
  //   <canvas id="chart"></canvas>
  // </div>
  <!-- <img src="Chart1.png" class="img2"/> -->
</div>
</div>
<div>
  <div class="container3">
  <div class="item1"> 
      <p class="d7-p">Text Lead</p>
      <table class="td7" >
       
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
  <div class="item2"><p class="d7-p">Cold<span style="padding-left: 1px; padding-right:1%;">Call</span>Leads</p>
      <table class="td7" >
       
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
  <div class="item3">
    <div class="item3d">VA’s Hours</div>
    <table class="item3d1">
      <div>
      <th class="th-11">#</th>
      <th class="th-11a" >Name</th>
      
        <th class="th-12">Week</th>
        <th class="th-12">Month</th>
        <th class="th-12">3 Month</th>
      
    </div>
   
    </table>
  <table>
    <tr>
      <td ><div class="td-12">1</div></td>
     
     <td >
      <div class="td-12a">
      <div class="td-12b">name 1</div>
    </div>
  </td>
     <td ><div class="td-12c">$75</div></td>
     <td><div class="td-12d">$75</div></td>
     <td><div class="td-12e">$75</div></td>
    </tr>
    <tr>
      <td ><div class="td-12">2</div></td>
     
     <td >
      <div class="td-12a">
      <div class="td-12b">name 1</div>
    </div>
  </td>
     <td ><div class="td-12c">$75</div></td>
     <td><div class="td-12d">$75</div></td>
     <td><div class="td-12e">$75</div></td>
    </tr>
    <tr>
      <td ><div class="td-12">3</div></td>
     
     <td >
      <div class="td-12a">
      <div class="td-12b">name 1</div>
    </div>
  </td>
     <td ><div class="td-12c">$75</div></td>
     <td><div class="td-12d">$75</div></td>
     <td><div class="td-12e">$75</div></td>
    </tr>
    <tr>
      <td ><div class="td-12">4</div></td>
     
     <td >
      <div class="td-12a">
      <div class="td-12b">name 1</div>
    </div>
  </td>
     <td ><div class="td-12c">$75</div></td>
     <td><div class="td-12d">$75</div></td>
     <td><div class="td-12e">$75</div></td>
    </tr>
    <tr>
      <td ><div class="td-12">5</div></td>
     
     <td >
      <div class="td-12a">
      <div class="td-12b">name 1</div>
    </div>
  </td>
     <td ><div class="td-12c">$75</div></td>
     <td><div class="td-12d">$75</div></td>
     <td><div class="td-12e">$75</div></td>
    </tr>
    <tr>
      <td ><div class="td-12">6</div></td>

     <td >
      <div class="td-12a">
      <div class="td-12b">name 1</div>
    </div>
  </td>
     <td ><div class="td-12c">$75</div></td>
     <td><div class="td-12d">$75</div></td>
     <td><div class="td-12e">$75</div></td>
    </tr>
    <tr>
      <td ><div class="td-12">7</div></td>

     <td >
      <div class="td-12a">
      <div class="td-12b">name 1</div>
    </div>
  </td>
     <td ><div class="td-12c">$75</div></td>
     <td><div class="td-12d">$75</div></td>
     <td><div class="td-12e">$75</div></td>
    </tr>
    <tr>
      <td ><div class="td-12">8</div></td>

     <td >
      <div class="td-12a">
      <div class="td-12b">name 1</div>
    </div>
  </td>
     <td ><div class="td-12c">$75</div></td>
     <td><div class="td-12d">$75</div></td>
     <td><div class="td-12e">$75</div></td>
    </tr>
    <tr>
      <td ><div class="td-12">9</div></td>

     <td >
      <div class="td-12a">
      <div class="td-12b">name 1</div>
    </div>
  </td>
     <td ><div class="td-12c">$75</div></td>
     <td><div class="td-12d">$75</div></td>
     <td><div class="td-12e">$75</div></td>
    </tr>
    <tr>
      <td ><div class="td-12">10</div></td>

     <td >
      <div class="td-12a">
      <div class="td-12b">name 1</div>
    </div>
  </td>
     <td ><div class="td-12c">$75</div></td>
     <td><div class="td-12d">$75</div></td>
     <td><div class="td-12e">$75</div></td>
    </tr>
    <tr>
      <td ><div class="td-12">11</div></td>

     <td >
      <div class="td-12a">
      <div class="td-12b">name 1</div>
    </div>
  </td>
     <td ><div class="td-12c">$75</div></td>
     <td><div class="td-12d">$75</div></td>
     <td><div class="td-12e">$75</div></td>
    </tr>
    <tr>
      <td ><div class="td-12">12</div></td>

     <td >
      <div class="td-12a">
      <div class="td-12b">name 1</div>
    </div>
  </td>
     <td ><div class="td-12c">$75</div></td>
     <td><div class="td-12d">$75</div></td>
     <td><div class="td-12e">$75</div></td>
    </tr>
  </table>
  </div>
  <div class="item4">
  <div class="item4d1">
    Campaign Success Rate
  </div>
    <table class="item4d2">
      <div>
      <th class="th-41">#</th>
      <th class="th-42" style="margin-left:1% ">Name</th>
      
        <th class="th-43">Leads</th>
        <table style="margin-top:2% ; ">
          <tr >
            <td ><div class="td-41a">1</div></td>
  
           <td >
            
            <div class="td-41b">Campaign name 1</div>
         
        </td>
           <td ><div class="td-41c">$75</div></td>
          
          </tr>
          <tr>
            <td ><div class="td-41a">2</div></td>
  
           <td >
            
            <div class="td-41b">Campaign name 1</div>
         
        </td>
           <td ><div class="td-41c">$75</div></td>
          
          </tr>
          <tr>
            <td ><div class="td-41a">3</div></td>
  
           <td >
            
            <div class="td-41b">Campaign name 1</div>
         
        </td>
           <td ><div class="td-41c">$75</div></td>
          
          </tr>
          <tr>
            <td ><div class="td-41a">4</div></td>
  
           <td >
            
            <div class="td-41b">Campaign name 1</div>
         
        </td>
           <td ><div class="td-41c">$75</div></td>
          
          </tr>
          <tr>
            <td ><div class="td-41a">5</div></td>
  
           <td >
            
            <div class="td-41b">Campaign name 1</div>
         
        </td>
           <td ><div class="td-41c">$75</div></td>
          
          </tr>
          <tr>
            <td ><div class="td-41a">6</div></td>
  
           <td >
            
            <div class="td-41b">Campaign name 1</div>
         
        </td>
           <td ><div class="td-41c">$75</div></td>
          
          </tr>
          <tr>
            <td ><div class="td-41a">7</div></td>
  
           <td >
            
            <div class="td-41b">Campaign name 1</div>
         
        </td>
           <td ><div class="td-41c">$75</div></td>
          
          </tr>
    </div>
   
    </table>
  </div>
  </div>
  <div class="grid-container-last">
    <div class="grid-last">
      <div class="ll">Profit</div>
      <div  id="chartContainer" ></div>
<!-- <img src="Chart3.png" class="img3"/> -->

    </div>
  </div>

 // <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.js"></script> 
  <script src="https://canvasjs.com/assets/script/canvasjs.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.0.1/chart.js" integrity="sha512-zulXrCFpnkALZBNUHe4E6rTUt7IhNLDUuLTLqTyKb93z7CrEVzFdL8KfPV6VPplL8+b4MZGOdh00+d2nzGiveg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;700&family=Outfit:wght@100;200;300;400;500;600;700;800;900&family=Roboto:ital,wght@1,900&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;500&family=Outfit:wght@100;200;300;400;500;600;700;800;900&family=Roboto:ital,wght@1,900&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;600&family=Outfit:wght@100;200;300;400;500;600;700;800;900&family=Roboto:ital,wght@1,900&display=swap" rel="stylesheet">
  
   <script>
console.log('test');
console.log('check')
    var data = {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug","Sept","Oct","Nov","Dec"],
      datasets: [{
         label: "Expenses",
        backgroundColor: '#FFC738',
        borderColor: "#FFC738",
        borderWidth: 2,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: [450, 250, 990, 150, 500, 450, 480,600,300,500,250,300],
      }]
    };
    //Chart.defaults.scale.gridLines.display = false;
    
    var options = {
      maintainAspectRatio: false,
      scales: {
        yAxes: [{ticks: {min: 0, max:1000}}],
        y: {
          stacked: true,
          grid: {
            display: true,
            color: "rgba(255,99,132,0.2)"
          }
        },
        x: {
          grid: {
            display: false
          }
        }
      }
    };
    
    new Chart('chart', {
      type: 'bar',
      options: options,
      data: data
    });
    
     </script>
    <script>
      
      window.onload = function () {
         console.log('test');
      var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        theme: "light1",
          
        title:{
          text: "."
        },
          axisY: {
          gridThickness: 0,
          stripLines: [
            {
              value: 1,
              // showOnTop: true,
              color: "gray",
              thickness: 2
            }
          ]
       },
        data: [{        
          type: "line",
              indexLabelFontSize: 16,
                
          dataPoints: [
            { y: 2000 },
            { y: 500},
            { y: 2000},
            { y: 500 },
            { y: 4000 },
            { y: 4500 },
            { y: 1500 },
            { y: 3000 },
            { y: 2500 },
            { y: 1300 },
            { y: 1000 },
            { y: 3000 }
          ]
        }]
      });
      
      chart.render();
      
      }
      </script>
      <script>
  
        var speedCanvas = document.getElementById("speedChart");
        
        // Chart.defaults.global.defaultFontFamily = "Lato";
        // Chart.defaults.global.defaultFontSize = 18;
        
        var dataFirst = {
            label: "SMS In",
            data: [980, 200, 700, 600, 20, 755, 40,150,50,800,500,0,200,900],
            lineTension: 0,
            fill: false,
            borderColor: '#2DC12A'
          };
        
        var dataSecond = {
            label: "SMS Out",
            data: [260,0,300,50,280,700,290,400,300,100,600],
            lineTension: 0,
            fill: false,
          borderColor: '#FF3838'
          };
          var dataThird = {
            label: "Calls In",
            data: [300,550, 75, 250, 620, 750, 300,150,300,400],
            lineTension: 0,
            fill: false,
            borderColor: '#FFC738'
          };
        
        var dataFourth = {
            label: "Calls Out",
            data: [260,300,690,300,780,200,990,500,750,800,730],
            lineTension: 0,
            fill: false,
          borderColor: '#FF8B38'
          };
        var speedData = {
          labels: [0,"jan", "feb", "mar", "april", "may", "june", "july","aug","sept","oct"],
          datasets: [dataFirst, dataSecond,dataThird,dataFourth]
        };
        
        var chartOptions = {
          legend: {
            display: true,
            position: 'bottom',
            labels: {
              boxWidth: 80,
              fontColor: 'black'
            }
          }
        };
        
        var lineChart = new Chart(speedCanvas, {
          type: 'line',
          data: speedData,
          options: chartOptions
        });
          
          </script>
          </main>`;
  // document.body.appendChild(injectElement);
  document.body.prepend(injectElement);
  // var markup = document.documentElement.innerHTML;
  // alert(markup);

}
init();