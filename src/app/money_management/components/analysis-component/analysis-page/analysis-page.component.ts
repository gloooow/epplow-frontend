import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { Item } from 'src/app/money_management/models/item.model';
import { ItemService } from 'src/app/money_management/services/item.service';

@Component({
  selector: 'app-analysis-page',
  templateUrl: './analysis-page.component.html',
  styleUrls: ['./analysis-page.component.sass']
})
export class AnalysisPageComponent implements OnInit {

  items: Item[] = new Array<Item>();
  itemsPerDay = new Array<number>(31).fill(0);


  public chart: any;


  constructor(
    private itemService: ItemService,
  ) { }

  ngOnInit(): void {
    this.loadItems();
  }

  loadItems() {
    this.itemService.items.subscribe(items => {
      this.items = items;
      this.items.forEach(item => {
        const date = new Date(item.date);
        if(item.type == 'EXPENSE' && item.categories != '8') {
          this.itemsPerDay[date.getDate()] += item.total*(-1);
        }
      }
      );
    });
  }

  createChart() {
    this.chart = new Chart('chart', {
      type: 'line',
      data: {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],
        datasets: [{
          label: 'Expenses',
          data: [this.itemsPerDay[0], this.itemsPerDay[1], this.itemsPerDay[2], this.itemsPerDay[3], this.itemsPerDay[4], this.itemsPerDay[5], this.itemsPerDay[6], this.itemsPerDay[7], this.itemsPerDay[8], this.itemsPerDay[9], this.itemsPerDay[10], this.itemsPerDay[11], this.itemsPerDay[12], this.itemsPerDay[13], this.itemsPerDay[14], this.itemsPerDay[15], this.itemsPerDay[16], this.itemsPerDay[17], this.itemsPerDay[18], this.itemsPerDay[19], this.itemsPerDay[20], this.itemsPerDay[21], this.itemsPerDay[22], this.itemsPerDay[23], this.itemsPerDay[24], this.itemsPerDay[25], this.itemsPerDay[26], this.itemsPerDay[27], this.itemsPerDay[28], this.itemsPerDay[29], this.itemsPerDay[30]],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
          ],
          borderWidth: 1
        }],
      },
      options: {
        aspectRatio: 6,
      }
    });
  }

}
