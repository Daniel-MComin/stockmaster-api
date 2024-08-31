import { Component, Inject, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { ServiçosEstoqueService } from "../../serviços/serviços-estoque.service";
import { ToastrService } from "ngx-toastr";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Estoque } from "../../models/estoque";

@Component({
  selector: "app-add",
  templateUrl: "./add.component.html",
  styleUrl: "./add.component.css",
})
export class AddComponent {
  constructor(
    private builder: FormBuilder,
    private service: ServiçosEstoqueService,
    private toastr: ToastrService,
    private dialog: MatDialogRef<AddComponent>,
    @Inject(MAT_DIALOG_DATA) private data: Estoque
  ) {
    this.service.getCategory().subscribe((result: any[]) => {
      this.categorias = result;
    });

    this.service.getFornecedor().subscribe((result: any[]) => {
      this.fornecedores = result;
    });
  }

  categorias: any[] = [];
  fornecedores: any[] = [];

  estoqueForm = this.builder.group({
    nome: [""],
    categoria: [""],
    fornecedor: [""],
    preco: [null],
    quantity: [null],
  });

  onSubmit() {
    if (this.estoqueForm.valid) {
      const produto = this.estoqueForm.value;
      const quantidade: number = this.estoqueForm.value.quantity ?? 0;
      for (let i = 0; i < quantidade; i++) {
        this.service.addProduct(produto).subscribe({
          next: (val: any) => {
            this.toastr.success("Produto adicionado com sucesso");
            if (i === quantidade - 1) {
              this.dialog.close();
            }
          },
          error: (erro: any) => {
            this.toastr.error("Erro");
          },
        });
      }
    }
  }
}
