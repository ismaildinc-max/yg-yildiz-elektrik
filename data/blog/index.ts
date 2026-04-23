import { gunesEnerjisiAmortismanSuresi } from "./gunes-enerjisi-amortisman-suresi";
import { elektrikliAracSarjAltyapisiPlanlamasi } from "./elektrikli-arac-sarj-altyapisi-planlamasi";
import { zayifAkimSistemlerindeDogruAltyapiKurgusu } from "./zayif-akim-sistemlerinde-dogru-altyapi-kurgusu";
import { agOgProjelerindeGuvenliSurecYonetimi } from "./ag-og-projelerinde-guvenli-surec-yonetimi";
import { tarimSulamaSistemlerindeElektrikAltyapisininOnemi } from "./tarim-sulama-sistemlerinde-elektrik-altyapisinin-onemi";
import { insaatElektrikTaahhutProjelerindePlanlama } from "./insaat-elektrik-taahhut-projelerinde-planlama";
import { gunesEnerjisiSistemlerindeDogruKapasiteSecimi } from "./gunes-enerjisi-sistemlerinde-dogru-kapasite-secimi";

export const blogData = {
  "gunes-enerjisi-amortisman-suresi": gunesEnerjisiAmortismanSuresi,
  "elektrikli-arac-sarj-altyapisi-planlamasi": elektrikliAracSarjAltyapisiPlanlamasi,
  "zayif-akim-sistemlerinde-dogru-altyapi-kurgusu": zayifAkimSistemlerindeDogruAltyapiKurgusu,
  "ag-og-projelerinde-guvenli-surec-yonetimi": agOgProjelerindeGuvenliSurecYonetimi,
  "tarim-sulama-sistemlerinde-elektrik-altyapisinin-onemi": tarimSulamaSistemlerindeElektrikAltyapisininOnemi,
  "insaat-elektrik-taahhut-projelerinde-planlama": insaatElektrikTaahhutProjelerindePlanlama,
  "gunes-enerjisi-sistemlerinde-dogru-kapasite-secimi": gunesEnerjisiSistemlerindeDogruKapasiteSecimi,
};

export const blogPosts = Object.values(blogData);