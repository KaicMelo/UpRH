import { Component, OnInit } from '@angular/core';

import {
  PoMenuItem,
  PoNotificationService,
  PoToolbarAction,
  PoToolbarProfile,
} from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  carregando: boolean = true;
  documentacao = 'Documentação';
  home = 'Home';
  poui = 'PO-UI';
  google = 'Google';
  sair = 'sair';

  readonly menus: Array<PoMenuItem> = [
    {
      label: this.home,
      icon: 'po-icon po-icon-menu',
      action: () => this.notification.success(this.home),
    },
    {
      label: this.documentacao,
      icon: 'po-icon-news',
      action: () => this.notification.success(this.documentacao),
    },
  ];

  actions: Array<PoToolbarAction> = [
    {
      label: this.documentacao,
      action: () => this.notification.success(this.documentacao),
    },
    { label: this.poui, action: () => this.notification.error(this.poui) },
    {
      label: this.google,
      action: () => this.notification.information(this.google),
    },
  ];

  notificationActions: Array<PoToolbarAction> = [
    {
      icon: 'po-icon-news',
      label: this.poui,
      type: 'danger',
      action: () => this.notification.error(this.poui)
    },
    { icon: 'po-icon-message', label: this.google, type: 'danger', action: () => this.notification.information(this.google) }
  ];

  profile: PoToolbarProfile = {
    avatar: 'data:image/png;base64,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',
    subtitle: 'kaic.melo@totvs.com.br',
    title: 'Kaic Melo'
  };

  profileActions: Array<PoToolbarAction> = [
    { icon: 'po-icon-user', label: this.sair, action: () => this.notification.error(this.sair) },
    { icon: 'po-icon-company', label: this.documentacao, action: () => this.notification.error(this.documentacao) },
  ];

  constructor(private notification: PoNotificationService) {}
  ngOnInit(): void {
    setTimeout(() => {
      this.carregando = false;
    }, 2000);
  }

  private onClick() {
    alert('Clicked in menu item');
  }
}
