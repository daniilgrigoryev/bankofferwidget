<template>
  <v-app>
    <v-main>
      <v-expansion-panels multiple accordion v-model="panel">
        <v-expansion-panel>
          <v-expansion-panel-header>
            <div>Информация по заявке</div>
            <template #actions>
              <v-icon color="primary">
                {{ mdiChevronDown }}
              </v-icon>
            </template>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-container>
              <v-layout row wrap>
                <v-flex xs6 lg4>
                  <v-card tile flat>
                    <v-card-subtitle class="py-0">Сумма банковской гарантии</v-card-subtitle>
                    <v-card-text class="text--primary">1.000.000</v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs6 lg4>
                  <v-card tile flat>
                    <v-card-subtitle class="py-0">Закрытый аукцион</v-card-subtitle>
                    <v-card-text class="text--primary">1.000.000</v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs6 lg4>
                  <v-card tile flat>
                    <v-card-subtitle class="py-0">Текущая коммиссия тарификатора</v-card-subtitle>
                    <v-card-text class="text--primary">12 800</v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs6 lg4>
                  <v-card tile flat>
                    <v-card-subtitle class="py-0">Наличие аванса</v-card-subtitle>
                    <v-card-text class="text--primary">Нет</v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs6 lg4>
                  <v-card tile flat>
                    <v-card-subtitle class="py-0">Срок БГ</v-card-subtitle>
                    <v-card-text class="text--primary">06.11.2020-12.02.2021 (99 дн)</v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs6 lg4>
                  <v-card tile flat>
                    <v-card-subtitle class="py-0">Тип контракта</v-card-subtitle>
                    <v-card-text class="text--primary">Оказание услуг</v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header>
            <div>Ресо банк</div>
            <template #actions>
              <v-icon color="primary">
                {{ mdiChevronDown }}
              </v-icon>
            </template>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-container id="information">
              <v-row align="center">
                <v-col :md="8" :lg="8">
                  <v-layout row wrap align-center justify-center>
                    <v-flex lg3 sm6 order-lg1>
                      <v-card flat>
                        <v-card-text class="px-0 py-2">
                          <v-row align="center">
                            <v-col :md="6" :lg="6">
                              <p class="text--secondary py-0 my-0 text-xs-left text-lg-right leading-4">Сумма</p>
                            </v-col>
                            <v-col :md="6" :lg="6">
                              <p class="text--primary py-0 my-0 leading-4">2 517</p>
                            </v-col>
                          </v-row>
                        </v-card-text>
                      </v-card>
                    </v-flex>
                    <v-flex lg3 sm6 order-lg4>
                      <v-card flat>
                        <v-card-text class="px-0 py-2">
                          <v-row align="center">
                            <v-col :md="6" :lg="6">
                              <p class="text--secondary py-0 my-0 text-xs-left text-lg-right leading-4">Срок</p>
                            </v-col>
                            <v-col :md="6" :lg="6">
                              <p class="text--primary py-0 my-0 leading-4">2 517</p>
                            </v-col>
                          </v-row>
                        </v-card-text>
                      </v-card>
                    </v-flex>
                    <v-flex lg4 sm6 order-lg2>
                      <v-card flat>
                        <v-card-text class="px-0 py-2">
                          <v-row align="center">
                            <v-col :md="6" :lg="8">
                              <p class="text--secondary py-0 my-0 text-xs-left text-lg-right leading-4">Коммиссия банка</p>
                            </v-col>
                            <v-col :md="6" :lg="4">
                              <p class="text--primary py-0 my-0 leading-4">2 517</p>
                            </v-col>
                          </v-row>
                        </v-card-text>
                      </v-card>
                    </v-flex>
                    <v-flex lg4 sm6 order-lg5>
                      <v-card flat>
                        <v-card-text class="px-0 py-2">
                          <v-row align="center">
                            <v-col :md="6" :lg="8">
                              <p class="text--secondary py-0 my-0 text-xs-left text-lg-right leading-4">Запрошенное изменение</p>
                            </v-col>
                            <v-col :md="6" :lg="4">
                              <p class="text--primary py-0 my-0 leading-4">2 517</p>
                            </v-col>
                          </v-row>
                        </v-card-text>
                      </v-card>
                    </v-flex>
                    <v-flex lg3 sm6 order-lg3>
                      <v-card flat>
                        <v-card-text class="px-0 py-2">
                          <v-row align="center">
                            <v-col :md="6" :lg="8">
                              <p class="text--secondary py-0 my-0 text-xs-left text-lg-right leading-4">Макет бг</p>
                            </v-col>
                            <v-col :md="6" :lg="4">
                              <v-icon large color="blue">{{ mdiFileWordBox }}</v-icon>
                            </v-col>
                          </v-row>
                        </v-card-text>
                      </v-card>
                    </v-flex>
                    <v-flex lg3 sm6 order-lg6>
                      <v-card flat>
                        <v-card-text class="px-0 py-2">
                          <v-row align="center">
                            <v-col :md="6" :lg="8">
                              <p class="text--secondary py-0 my-0 text-xs-left text-lg-right leading-4">Договр</p>
                            </v-col>
                            <v-col :md="6" :lg="4">
                              <v-icon large color="red">{{ mdiFilePdfBox }}</v-icon>
                            </v-col>
                          </v-row>
                        </v-card-text>
                      </v-card>
                    </v-flex>
                  </v-layout>
                </v-col>
                <v-col :md="4" :lg="4">
                  <v-layout row wrap align-center justify-end>
                    <v-flex xs6>
                      <v-card flat>
                        <v-card-subtitle class="py-0">Коммиссия</v-card-subtitle>
                        <v-card-text class="py-0">
                          <span class="text-h5 green--text font-weight-medium"> 1 200 </span>
                          <span class="text-h5 green--text font-weight-medium"> ₽ </span>
                        </v-card-text>
                      </v-card>
                    </v-flex>
                    <v-flex xs6>
                      <v-card flat class="text-right">
                        <v-btn class="text-capitalize text-caption my-1" color="secondary" elevation="2">
                          <span>Макет БГ</span>
                          <v-icon right>{{ mdiDownload }}</v-icon>
                        </v-btn>
                        <v-btn class="text-capitalize text-caption my-1" color="secondary" elevation="2">
                          <span>Соглашение</span>
                          <v-icon right>{{ mdiDownload }}</v-icon>
                        </v-btn>
                      </v-card>
                    </v-flex>
                  </v-layout>
                </v-col>
              </v-row>
            </v-container>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-header>
            <div>Ресо банк</div>
            <template #actions>
              <v-icon color="primary">
                {{ mdiChevronDown }}
              </v-icon>
            </template>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-container id="information">
              <v-layout row wrap>
                <v-flex>
                  <v-card tile flat>
                    <v-card-subtitle class="py-0">Адрес доставки БГ</v-card-subtitle>
                    <v-card-text class="py-0">
                      <p class="text--primary my-0">Получить оригинал необходимо в офисе банка по адресу: г. Москва, Дубинская улица, 45</p>
                      <a href="#" @click="dialog = true">Оригинал доставлять не нужно</a>
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>

      <v-dialog v-model="dialog" width="500" content-class="theme--light v-application">
        <v-card id="delivery">
          <div>
            <p class="text-center text--secondary subtitle-1 py-0 my-1">Адресс доставки</p>
            <v-divider></v-divider>
          </div>
          <v-container class="px-0 py-0">
            <v-row align="center" align-content="center" dense no-gutters class="py-1">
              <v-col cols="6" class="text--primary subtitle-2 pl-5"> Регион </v-col>
              <v-col cols="6" class="text--primary subtitle-2"> Санкт Петербург </v-col>
            </v-row>
            <v-row align="center" align-content="center" dense no-gutters class="py-1">
              <v-col cols="6" class="text--primary subtitle-2 pl-5"> Город </v-col>
              <v-col cols="6" class="text--primary subtitle-2"> Санкт Петербург </v-col>
            </v-row>
            <v-row align="center" align-content="center" dense no-gutters class="py-1">
              <v-col cols="6" class="text--primary subtitle-2 pl-5"> Улица/Проспект </v-col>
              <v-col cols="6" class="text--primary subtitle-2"> Промышленная </v-col>
            </v-row>
            <v-row align="center" align-content="center" dense no-gutters class="py-1">
              <v-col cols="6" class="text--primary subtitle-2 pl-5"> Дом </v-col>
              <v-col cols="6" class="text--primary subtitle-2"> 17 </v-col>
            </v-row>
            <v-row align="center" align-content="center" dense no-gutters class="py-1">
              <v-col cols="6" class="text--primary subtitle-2 pl-5"> Квартира/Офис </v-col>
              <v-col cols="6" class="text--primary subtitle-2"> 101 </v-col>
            </v-row>
            <v-row align="center" align-content="center" dense no-gutters class="py-1">
              <v-col cols="6" class="text--primary subtitle-2 pl-5"> Индекс </v-col>
              <v-col cols="6" class="text--primary subtitle-2"> 198095 </v-col>
            </v-row>
          </v-container>
          <div>
            <p class="text-center text--secondary subtitle-1 py-0 my-1">Получатель</p>
            <v-divider></v-divider>
          </div>
          <v-container class="px-0 py-0">
            <v-row align="center" align-content="center" dense no-gutters class="py-1">
              <v-col cols="6" class="text--primary subtitle-2 pl-5"> Регион </v-col>
              <v-col cols="6" class="text--primary subtitle-2"> Санкт Петербург </v-col>
            </v-row>
            <v-row align="center" align-content="center" dense no-gutters class="py-1">
              <v-col cols="6" class="text--primary subtitle-2 pl-5"> Город </v-col>
              <v-col cols="6" class="text--primary subtitle-2"> Санкт Петербург </v-col>
            </v-row>
            <v-row align="center" align-content="center" dense no-gutters class="py-1">
              <v-col cols="6" class="text--primary subtitle-2 pl-5"> Улица/Проспект </v-col>
              <v-col cols="6" class="text--primary subtitle-2"> Промышленная </v-col>
            </v-row>
            <v-row align="center" align-content="center" dense no-gutters class="py-1">
              <v-col cols="6" class="text--primary subtitle-2 pl-5"> Дом </v-col>
              <v-col cols="6" class="text--primary subtitle-2"> 17 </v-col>
            </v-row>
            <v-row align="center" align-content="center" dense no-gutters class="py-1">
              <v-col cols="6" class="text--primary subtitle-2 pl-5"> Квартира/Офис </v-col>
              <v-col cols="6" class="text--primary subtitle-2"> 101 </v-col>
            </v-row>
            <v-row align="center" align-content="center" dense no-gutters class="py-1">
              <v-col cols="6" class="text--primary subtitle-2 pl-5"> Индекс </v-col>
              <v-col cols="6" class="text--primary subtitle-2"> 198095 </v-col>
            </v-row>
          </v-container>
          <v-divider></v-divider>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="text-capitalize text-caption" color="secondary" @click="dialog = false"> Закрыть </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-main>
  </v-app>
</template>

<script>
import { mdiChevronDown, mdiDownload, mdiFilePdfBox, mdiFileWordBox } from '@mdi/js'
export default {
  data: () => ({
    panel: [0, 1, 2],
    dialog: false,
    mdiChevronDown: mdiChevronDown,
    mdiDownload: mdiDownload,
    mdiFilePdfBox: mdiFilePdfBox,
    mdiFileWordBox: mdiFileWordBox,
  }),
}
</script>

<style lang="scss">
@import 'vuetify/dist/vuetify.min.css';
</style>


<style lang="scss" scoped>
#delivery .row:nth-child(2n) {
  background-color: #f0eded;
}

#app {
  max-width: 1024px;
  background: #f0f2f5;
}
</style>
