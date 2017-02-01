import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {SelectItem, Message} from 'primeng/primeng';
import { AccountCreatorService } from '../services/account-creator.service';
import { Account } from '../../../login/ts/models/account.model';
import { AuthService } from '../../../login/ts/services/auth.service';

@Component({
  selector: 'account-creator',
  templateUrl: 'app/account-creator/templates/account-creator.html',
  styleUrls: ['app/css/styles.css']
})

export class AccountCreatorComponent {

  msgs: Message[] = [];
  _createNewAccount: boolean = false;
  salutations: SelectItem[];

  ngOnInit() {
    this.salutations = [];
    this.salutations.push({ label: 'Bitte wählen', value: '' });
    this.salutations.push({ label: 'Frau', value: 'Frau' });
    this.salutations.push({ label: 'Herr', value: 'Herr' });
  }


  constructor(
    private accountService: AccountCreatorService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private account: Account) {

    if (this.route.snapshot.params['createNewAccount'] == 'true') {
      this._createNewAccount = true;
    }
  }

  creatAccount() {
    if (!this.account.validate(this._createNewAccount)) {
      this.msgs.push({ severity: 'error', summary: 'Fehler!', detail: 'Bitte überprüfen Sie Ihre Eingabe!' });
    } else {
      this.accountService.createAccount(this.account).subscribe(res => {
        if (res.statusCode == 'OK') {
          this.msgs.push({ severity: 'info', summary: 'Aktion erfolgreich!', detail: 'Das Benutzerkonto wurde erstellt!' });
          this.authService.login(this.account.userName, this.account.password).subscribe(res => {
            if (res.authToken.success == true) {
              this.account.id = res.id;
              this.router.navigate(['confirmation']);
            } else {
              this.msgs.push({ severity: 'error', summary: 'Fehler!', detail: 'Sie konnten nicht angemeldet werden' });
            }
          })
        } else {
          this.msgs.push({ severity: 'error', summary: 'Fehler!', detail: res.statusMessage });
        }
      })
    }
  }

  orderDirect() {
    if (!this.account.validate(this._createNewAccount)) {
      this.msgs.push({ severity: 'error', summary: 'Fehler!', detail: 'Bitte überprüfen Sie Ihre Eingabe!' });
    } else {
      this.router.navigate(['confirmation']);
    }
  }

  get createNewAccount(): boolean {
    return this._createNewAccount;
  }






}
