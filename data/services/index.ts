import { gunesEnerjisiSistemleri } from "./gunes-enerjisi-sistemleri";
import { zayifAkimSistemleri } from "./zayif-akim-sistemleri";
import { elektrikliAracSarjIstasyonlari } from "./elektrikli-arac-sarj-istasyonlari";
import { alcakOrtaGerilimUygulamalari } from "./alcak-orta-gerilim-uygulamalari";
import { tarimSulamaSistemleri } from "./tarim-sulama-enerji-sistemleri";
import { insaatElektrikTaahhut } from "./insaat-elektrik-taahhut";

export const serviceData = {
  "gunes-enerjisi-sistemleri": gunesEnerjisiSistemleri,
  "zayif-akim-sistemleri": zayifAkimSistemleri,
  "elektrikli-arac-sarj-istasyonlari": elektrikliAracSarjIstasyonlari,
  "alcak-orta-gerilim-uygulamalari": alcakOrtaGerilimUygulamalari,
  "tarim-sulama-enerji-sistemleri": tarimSulamaSistemleri,
  "insaat-elektrik-taahhut": insaatElektrikTaahhut,
};