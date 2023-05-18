import { Component } from '@angular/core';
import { OnInit } from '@angular/core';    //thư viện để dùng hàm onInit()
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  implements OnInit{
  public districts: string[] = ['Quan / huyen'];
  public vietnamData =[
    {
      city:"Chon thanh pho",
      district:['Quan / huyen']
    },
    {
      city:"An Giang",
      district: [
        'Quan 1',
        'Quan 2'
      ]
    },
    {
      city:"Ha Noi",
      district: [
        'Quan 4',
        'Quan 5'
      ]
    }
  ];


 constructor(){}
  ngOnInit(): void {
   console.log('vietnamData= ',this.vietnamData);
  }   
  

  public changeCity(event : any){
    const city = event.target.value;
    console.log('event', city);   // lấy giá trị ở thuộc tính value của option

    //Cach 1:
    // const search = this.vietnamData.filter(data => data.city === city);
    // console.log('search', search);

    // if(search && search.length > 0){
    //   this.districts = search[0].district;
    // }


    //Cach 2
    this.districts = this.vietnamData.find(data => data.city === city)?.district || [];
  }


}
