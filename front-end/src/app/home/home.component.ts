import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart,registerables } from 'chart.js/auto';
import { ServiçosEstoqueService } from '../estoque/serviços/serviços-estoque.service';
import { ChartdataC, ChartdataF } from '../estoque/models/chartdata';
import { AuthService } from '../shared/services/auth.service';
Chart.register(...registerables);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  constructor(
    private estoqueService: ServiçosEstoqueService,
                private userService:AuthService){}

productCount:any;
productPrice:any;
userCount:any;

ngOnInit(): void {
  this.loadChartData();
  this.estoqueService?.getProductNumber()?.subscribe(
    dataN => {
      this.productCount = dataN.total_produtos;
    },
  );
  this.estoqueService?.getProductAllPrice()?.subscribe(
    dataP => {
      this.productPrice = dataP.total_preco;
    },
  );
  this.userService.getUserCount().subscribe(
    data => {
      this.userCount = data.user_count;
    },
  );
}

loadChartData(){
  this.estoqueService.getCategoryNumber().subscribe(item =>{
    this.chartdataC = item;
    if(this.chartdataC!=null){
      this.chartdataC.map(item =>{
        this.labeldataC.push(item.categoria__nome);
        this.realdataC.push(item.total);
      })
      this.startChartCategory(this.labeldataC,this.realdataC)
    }
  })

  this.estoqueService.getFornecedoresNumber().subscribe(item =>{
    this.chartdataF = item;
    if(this.chartdataF!=null){
      this.chartdataF.map(item =>{
        this.labeldataF.push(item.fornecedor__nome);
        this.realdataF.push(item.total);
      })
      this.startChartFornecedor(this.labeldataF,this.realdataF)
    }
  })
}

chartdataC:ChartdataC[]=[];
labeldataC:string[]=[];
colordataC:string[]=[];
realdataC:number[]=[];


chartdataF:ChartdataF[]=[];
labeldataF:string[]=[];
colordataF:string[]=[];
realdataF:number[]=[];


startChartCategory(labeldata:any,valuedata:any){
 const categoryChart = new Chart('categorias',{
  type: 'doughnut',
  data:{
    labels:labeldata,
    datasets:[
      {
        data:valuedata,
        backgroundColor: [
          '#800080',
          '#8A2BE2',
          '#4B0082',
          '#483D8B',
          '#6A5ACD',
          '#7B68EE',
          '#89CFF0',
          '#0047AB',
          '#4169E1',
          '#0818A8',
          '#770737'
        ],
      }
    ]
  },
  options: {

  }
 })
}

startChartFornecedor(labeldata:any,valuedata:any){
  const fornecedorChart = new Chart('fornecedores',{
   type: 'doughnut',
   data:{
     labels:labeldata,
     datasets:[
       {
         data:valuedata,
         backgroundColor: [
          '#800080',
          '#8A2BE2',
          '#4B0082',
          '#483D8B',
          '#6A5ACD',
          '#7B68EE',
          '#89CFF0',
          '#0047AB',
          '#4169E1',
          '#0818A8',
          '#770737'
         ],
       }
     ]
   },
   options: {
 
   }
  })
 }

 logOut(){
  this.userService.logOut()
 }
}
