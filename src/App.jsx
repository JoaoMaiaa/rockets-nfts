// import './assets/sass/style.scss';
import groupAvarts from './assets/images/group-avarts.png';
import banner from './assets/images/banner.png';
import artista1 from './assets/images/artista-1.png';
import artista2 from './assets/images/artista-2.png';
import artista3 from './assets/images/artista-3.png';
import artista4 from './assets/images/artista-4.png';
import artista5 from './assets/images/artista-5.png';
import artista6 from './assets/images/artista-6.png';
import galeria1 from './assets/images/galeria-1.png';
import galeria2 from './assets/images/galeria-2.png';
import galeria3 from './assets/images/galeria-3.png';
import galeria4 from './assets/images/galeria-4.png';
import galeria5 from './assets/images/galeria-5.png';
import galeria6 from './assets/images/galeria-6.png';
import galeria7 from './assets/images/galeria-7.png';
import galeria8 from './assets/images/galeria-8.png';
import astronauta1 from './assets/images/astronauta-1.png';
import astronauta2 from './assets/images/astronauta-2.png';
import astronauta3 from './assets/images/astronauta-3.png';
import astronauta4 from './assets/images/astronauta-4.png';
import { Container, Button, Section, Column, Notification, Content, Card, Image, Title } from 'rbx'
import React, { Fragment } from 'react'

function App() {
  return (
    <Fragment>
      <Section className="section1">
        <Container>
          <Column.Group>
            <Column size={4}>
              <Content>
                <p class="has-text-light">
                  Mercado digital para colecionáveis em criptos e tokens não fungíveis [NFTs]. <br /> Compre, venda e descubra ativos digitais exclusivos para você
                </p>
              </Content>
              <Image.Container size={128}>
                <Image src={groupAvarts} />
              </Image.Container>
            </Column>
            <Column size={5}>
              <Title className="has-text-light">
                Descubra a verdadeira <br /> arte digital e <br /> colecione diversas <br /> NFTs
              </Title>
            </Column>
            <Column>
              <div class="">
                <svg width="202" height="202" viewBox="0 0 202 202" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="101" cy="101" r="75" fill="#FF5B50" stroke="#060606" stroke-width="50" />
                  <circle cx="101" cy="101" r="100" stroke="white" />
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M127.216 73.1091L119.816 72.0117C119.597 71.9678 119.378 72.0556 119.29 72.1434L116.137 76.2696C115.918 76.533 115.874 76.8842 115.962 77.1915C116.05 77.4987 115.787 77.7621 115.48 77.7182L112.897 77.1475C112.503 77.0597 112.065 77.1915 111.802 77.5426L101.555 90.7116C101.38 90.975 101.029 91.0628 100.723 90.9311L96.8253 89.1752C96.475 88.9996 96.0809 89.0435 95.7743 89.263L93.8037 90.6238C93.4972 90.8433 93.0593 90.8872 92.709 90.7116L91.7456 90.2287C91.1325 89.9214 90.388 90.2726 90.2129 90.9311L89.5122 94.0477C89.3371 94.7939 89.6436 95.5402 90.3005 95.9353L91.7893 96.8571L96.5626 99.7982L98.8835 101.247C99.5404 101.642 100.372 101.554 100.942 101.071L104.839 97.6472C105.146 97.3838 105.627 97.2961 105.978 97.5156L107.16 98.1301C107.554 98.3496 108.036 98.2618 108.342 97.9545L110.313 96.1109C110.619 95.8036 111.101 95.7597 111.452 95.9353L114.386 97.2961C114.823 97.5156 115.349 97.3838 115.655 96.9888L117.013 95.2329L127.304 82.0201C127.786 81.4055 127.479 80.4837 126.691 80.3081L124.414 79.7813C123.932 79.6936 123.713 79.079 124.063 78.7278L127.61 74.2943C127.961 73.7675 127.742 73.1969 127.216 73.1091ZM93.2779 99.7104C93.059 99.5787 92.84 99.7982 92.9276 100.018L94.0224 102.915C94.11 103.134 94.11 103.354 94.0662 103.573L93.1028 107.348C93.059 107.612 93.1466 107.875 93.3217 108.007L96.0806 110.158C96.3433 110.333 96.6936 110.333 96.9126 110.114L99.8028 107.568C99.978 107.436 100.197 107.348 100.372 107.305L103.656 106.953C103.875 106.909 103.963 106.602 103.744 106.47L93.2779 99.7104ZM91.6579 109.368C91.8769 109.28 92.1396 109.324 92.3148 109.456L95.2926 111.738C95.4239 111.87 95.5115 112.045 95.5115 112.265L95.2488 115.601C95.205 115.777 95.1612 115.908 95.0298 116.04L82.199 128.946C82.1115 129.077 81.9363 128.946 82.0239 128.814L85.5709 122.976C85.6147 122.932 85.5709 122.844 85.5272 122.8H85.3958L84.2572 123.239C84.1696 123.239 84.1258 123.195 84.0821 123.151V123.063L89.0304 110.816C89.118 110.685 89.2056 110.553 89.337 110.509L91.6579 109.368Z" fill="white" />
                  <path d="M108.5 32.7002V35H97.206V32.7002H108.5ZM97.7773 13.6719V35H94.9502V13.6719L97.7773 13.6719ZM107.006 22.8418V25.1416L97.206 25.1416V22.8418L107.006 22.8418ZM108.354 13.6719V15.9863L97.206 15.9863V13.6719L108.354 13.6719Z" fill="white" />
                  <path d="M132.1 19.3283L133.47 28.8972L141.459 23.5181L144.467 24.8649L134.041 31.7687L135.979 44.4325L132.944 43.0738L131.519 33.3038L123.344 38.7763L120.309 37.4176L130.965 30.3921L129.091 17.9816L132.1 19.3283Z" fill="white" />
                  <path d="M156.847 52.2775L153.046 48.0325L154.75 46.4889L158.552 50.7339C159.288 51.556 160.014 52.1037 160.731 52.377C161.448 52.6503 162.142 52.6936 162.814 52.507C163.492 52.3276 164.128 51.9691 164.722 51.4317C165.264 50.9401 165.667 50.358 165.93 49.6854C166.2 49.02 166.251 48.3016 166.085 47.5301C165.925 46.7521 165.478 45.9521 164.741 45.13L161.38 41.3761L147.285 54.1373L145.399 52.0311L161.21 37.7166L166.457 43.5767C167.532 44.7771 168.235 45.9787 168.565 47.1817C168.895 48.3846 168.886 49.5317 168.539 50.6229C168.2 51.7076 167.563 52.6727 166.629 53.5182C165.616 54.4358 164.558 55.0044 163.457 55.224C162.356 55.4437 161.246 55.3092 160.127 54.8207C159.015 54.3256 157.922 53.4779 156.847 52.2775Z" fill="white" />
                  <path d="M167.935 87.3582L165.748 88.0724L162.469 77.925L164.656 77.2108L167.935 87.3582ZM182.914 71.8311L162.641 78.4546L161.771 75.7645L182.045 69.1409L182.914 71.8311Z" fill="white" />
                  <path d="M176.534 118.1L175.194 117.959C173.601 117.79 172.195 117.44 170.974 116.909C169.753 116.377 168.74 115.691 167.934 114.849C167.128 114.008 166.547 113.038 166.191 111.94C165.833 110.851 165.722 109.661 165.857 108.37C165.988 107.117 166.341 105.99 166.917 104.991C167.492 104.001 168.261 103.169 169.225 102.495C170.188 101.831 171.323 101.356 172.629 101.072C173.935 100.788 175.385 100.73 176.977 100.898L178.318 101.04C179.91 101.208 181.312 101.563 182.522 102.103C183.741 102.654 184.752 103.355 185.557 104.206C186.371 105.058 186.957 106.028 187.315 107.117C187.671 108.215 187.784 109.391 187.653 110.644C187.518 111.935 187.163 113.076 186.588 114.066C186.012 115.066 185.239 115.892 184.267 116.546C183.304 117.21 182.171 117.675 180.866 117.939C179.571 118.215 178.127 118.269 176.534 118.1ZM175.485 115.176L176.854 115.321C178.117 115.454 179.247 115.441 180.246 115.281C181.243 115.131 182.098 114.844 182.81 114.418C183.523 113.993 184.086 113.438 184.501 112.756C184.915 112.083 185.169 111.294 185.264 110.391C185.355 109.517 185.268 108.707 185.002 107.962C184.735 107.227 184.298 106.572 183.691 105.997C183.082 105.432 182.306 104.962 181.364 104.588C180.421 104.213 179.318 103.959 178.056 103.826L176.686 103.681C175.414 103.546 174.273 103.563 173.264 103.732C172.265 103.901 171.403 104.203 170.68 104.637C169.966 105.082 169.403 105.636 168.99 106.3C168.576 106.973 168.323 107.746 168.232 108.62C168.136 109.533 168.221 110.362 168.487 111.107C168.753 111.852 169.191 112.503 169.8 113.058C170.419 113.624 171.2 114.085 172.145 114.44C173.099 114.796 174.213 115.041 175.485 115.176Z" fill="white" />
                  <path d="M179.392 139.251L175.876 145.374C175.078 146.763 174.194 147.813 173.222 148.525C172.245 149.246 171.2 149.615 170.085 149.635C168.974 149.667 167.819 149.335 166.62 148.639C165.775 148.149 165.102 147.526 164.601 146.772C164.103 146.032 163.793 145.197 163.673 144.269C163.556 143.355 163.635 142.384 163.909 141.357L164.037 140.517L167.341 134.762L169.345 135.892L166.85 140.236C166.345 141.117 166.076 141.938 166.044 142.699C166.021 143.464 166.187 144.147 166.54 144.748C166.893 145.348 167.387 145.832 168.02 146.2C168.73 146.612 169.431 146.832 170.123 146.862C170.816 146.891 171.478 146.689 172.111 146.254C172.747 145.833 173.335 145.152 173.874 144.212L175.982 140.541L159.539 130.995L160.946 128.543L179.392 139.251ZM154.739 139.354L165.682 139.711L164.229 142.271L153.389 142.059L153.237 141.971L154.739 139.354Z" fill="white" />
                  <path d="M134.874 160.733L133.527 158.869L142.646 152.207L143.993 154.071L134.874 160.733ZM154.676 169.831L142.185 152.544L144.468 150.876L156.959 168.164L154.676 169.831ZM141.854 167.842L140.507 165.978L148.42 160.197L149.767 162.062L141.854 167.842ZM146.136 176.07L144.781 174.194L153.782 167.618L155.137 169.494L146.136 176.07Z" fill="white" />
                  <path d="M82.751 184.542L93.6759 167L96.4979 167.603L84.1365 186.771L82.3172 186.382L82.751 184.542ZM80.984 164.287L83.8827 184.784L83.5348 186.642L81.7156 186.253L78.1477 163.681L80.984 164.287ZM79.7092 172.089L80.1879 169.824L91.9056 172.329L91.427 174.593L79.7092 172.089Z" fill="white" />
                  <path d="M27.0967 143.273L47.4235 139.637L48.8604 142.14L26.367 145.797L25.4406 144.184L27.0967 143.273ZM40.9609 128.382L27.673 144.277L26.0606 145.264L25.1343 143.65L39.5167 125.867L40.9609 128.382ZM34.315 132.664L36.3166 131.502L42.2832 141.893L40.2815 143.055L34.315 132.664Z" fill="white" />
                  <path d="M15.2499 116.463L14.5159 109.44C14.3494 107.847 14.4516 106.477 14.8224 105.328C15.1923 104.169 15.8231 103.253 16.7149 102.579C17.596 101.897 18.7261 101.483 20.1052 101.337C21.0763 101.235 21.9857 101.34 22.8334 101.653C23.6704 101.957 24.4091 102.449 25.0495 103.127C25.6792 103.797 26.1833 104.628 26.5618 105.619L26.95 106.373L27.6398 112.973L25.3558 113.244L24.835 108.261C24.7294 107.251 24.4668 106.43 24.0471 105.796C23.6177 105.164 23.0842 104.71 22.4466 104.434C21.8089 104.157 21.1259 104.058 20.3976 104.135C19.5818 104.221 18.8847 104.457 18.3064 104.842C17.7281 105.227 17.3099 105.782 17.0518 106.506C16.7829 107.222 16.7049 108.119 16.8175 109.197L17.2577 113.408L36.166 111.409L36.4599 114.221L15.2499 116.463ZM35.164 101.823L26.0887 107.996L25.768 105.07L34.6755 98.8401L34.8503 98.8216L35.164 101.823Z" fill="white" />
                  <path d="M18.8008 72.7131L39.0743 79.3367L38.2185 81.9851L17.945 75.3615L18.8008 72.7131ZM20.9087 66.1898L23.1087 66.9086L18.0416 82.5897L15.8415 81.8709L20.9087 66.1898Z" fill="white" />
                  <path d="M55.5379 49.771L57.2428 51.3146L49.7086 59.7282L48.0038 58.1847L55.5379 49.771ZM34.2789 44.9881L50.0897 59.3026L48.2037 61.4088L32.3929 47.0942L34.2789 44.9881ZM47.233 44.2676L48.9379 45.8111L42.4005 53.1117L40.6956 51.5681L47.233 44.2676ZM41.3343 37.1092L43.05 38.6625L35.6135 46.967L33.8978 45.4137L41.3343 37.1092Z" fill="white" />
                </svg>
              </div>
            </Column>
          </Column.Group>
          <Column.Group className="mt-5">
            <Column size={3}>
              <Image.Container>
                <Image src={galeria1} />
              </Image.Container>
            </Column>
            <Column size={3}>
              <Image.Container>
                <Image src={galeria2} />
              </Image.Container>
            </Column>
            <Column size={3}>
              <Image.Container>
                <Image src={galeria3} />
              </Image.Container>
            </Column>
            <Column size={3}>
              <Image.Container>
                <Image src={galeria4} />
              </Image.Container>
            </Column>
          </Column.Group>
          <Column.Group>
            <Column size={3}>
              <Image.Container>
                <Image src={galeria5} />
              </Image.Container>
            </Column>
            <Column size={3}>
              <Image.Container>
                <Image src={galeria6} />
              </Image.Container>
            </Column>
            <Column size={3}>
              <Image.Container>
                <Image src={galeria7} />
              </Image.Container>
            </Column>
            <Column size={3}>
              <Image.Container>
                <Image src={galeria8} />
              </Image.Container>
            </Column>
          </Column.Group>
        </Container>
      </Section>
      <Section>
        <Container>
          <Column.Group>
            <Column>
              <Column.Group>
                <Column size={2} className="my-auto">
                  <Title className="mb-0 has-text-light">10k+</Title>
                  <p class="mb-5 has-text-weight-bold">Artes</p>
                  <Title className="mb-0 has-text-light">200k+</Title>
                  <p class="mb-5 has-text-weight-bold">Vendas</p>
                  <Title className="mb-0 has-text-light">20k+</Title>
                  <p class="mb-5 has-text-weight-bold">Artistas</p>
                </Column>
                <Column>
                  <Column.Group>
                    <Column className="p-5 has-text-light">
                      <p class="mx-4 mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer malesuada finibus nibh, molestie egestas nibh fringilla quis. Maecenas finibus laoreet placerat.</p>
                      <a href="#" class="mx-4 has-text-light">Lorem Ipsum</a>
                    </Column>
                    <Column className="p-5 has-text-light">
                      <p class="mx-4 mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer malesuada finibus nibh, molestie egestas nibh fringilla quis. Maecenas finibus laoreet placerat.</p>
                      <a href="#" class="mx-4 has-text-light">Lorem Ipsum</a>
                    </Column>
                  </Column.Group>
                  <Column.Group>
                    <Column>
                      <Image.Container>
                        <Image src={banner} />
                      </Image.Container>
                    </Column>
                  </Column.Group>
                </Column>
              </Column.Group>
            </Column>
          </Column.Group>
        </Container>
      </Section>
      <Section>
        <Container>
          <Column.Group className="mb-5">
            <Column className="mb-5">
              <Title className="has-text-light"><span class="is-red">Populares</span> da semana</Title>
            </Column>
          </Column.Group>
          <Column.Group>
            <Column size={6} className="mt-5">
              <Card>
                <div class="mt-4 mb-4">
                  <Card.Header>
                    <Title className="mb-1 has-text-light">
                      Astronauta 1
                    </Title>
                    <div class="mb-0 ml-5 pl-5 mt-1">
                      <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.6468 6.01317L3.05785 22.9456L6.5906 25.1549L17.1796 8.22243L20.0204 20.5476L24.08 19.6119L19.6417 0.356124L0.385901 4.79446L1.32161 8.85405L13.6468 6.01317Z" fill="white" />
                      </svg>
                    </div>
                  </Card.Header>
                  <div class="is-flex mt-0">
                    <p class="">João Maia</p>
                    <p class="rkt ml-5 has-text-weight-semibold"> 1.50 rkt</p>
                  </div>
                </div>
                <Card.Image>
                  <Image.Container>
                    <Image src={astronauta1} />
                  </Image.Container>
                </Card.Image>
              </Card>
            </Column>
            <Column size={6} className="mt-5 border-l is-flex-tablet is-justify-content-end">
              <Card className="">
                <div class="mt-4 mb-4">
                  <Card.Header>
                    <Title className="mb-1 has-text-light">
                      Astronauta 2
                    </Title>
                    <div class="mb-0 ml-5 pl-5 mt-1">
                      <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.6468 6.01317L3.05785 22.9456L6.5906 25.1549L17.1796 8.22243L20.0204 20.5476L24.08 19.6119L19.6417 0.356124L0.385901 4.79446L1.32161 8.85405L13.6468 6.01317Z" fill="white" />
                      </svg>
                    </div>
                  </Card.Header>
                  <div class="is-flex mt-0">
                    <p class="">Jakeliny gracielly</p>
                    <p class="rkt ml-5 has-text-weight-semibold"> 2.00 rkt</p>
                  </div>
                </div>
                <Card.Image className="">
                  <Image.Container>
                    <Image src={astronauta2} />
                  </Image.Container>
                </Card.Image>
              </Card>
            </Column>

          </Column.Group>
          <Column.Group>
            <Column size={6}>
              <Card>
                <div class="mb-4 mt-4">
                  <Card.Header>
                    <Title className="has-text-light mb-1">
                      Astronauta 3
                    </Title>
                    <div class="mb-0 ml-5 pl-5 mt-1">
                      <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.6468 6.01317L3.05785 22.9456L6.5906 25.1549L17.1796 8.22243L20.0204 20.5476L24.08 19.6119L19.6417 0.356124L0.385901 4.79446L1.32161 8.85405L13.6468 6.01317Z" fill="white" />
                      </svg>
                    </div>
                  </Card.Header>
                  <div class="is-flex mt-0">
                    <p class="">João Inácio</p>
                    <p class="rkt ml-5 has-text-weight-semibold"> 3.75 rkt</p>
                  </div>
                </div>
                <Card.Image>
                  <Image.Container>
                    <Image src={astronauta3} />
                  </Image.Container>
                </Card.Image>
              </Card>
            </Column>
            <Column size={6} className="border-l is-flex-tablet is-justify-content-end">
              <Card className="">
                <div class="mt-4 mb-4">
                  <Card.Header>
                    <Title className="mb-1 has-text-light">
                      Astronauta 4
                    </Title>
                    <div class="mb-0 ml-5 pl-5 mt-1">
                      <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.6468 6.01317L3.05785 22.9456L6.5906 25.1549L17.1796 8.22243L20.0204 20.5476L24.08 19.6119L19.6417 0.356124L0.385901 4.79446L1.32161 8.85405L13.6468 6.01317Z" fill="white" />
                      </svg>
                    </div>
                  </Card.Header>
                  <div class="is-flex mt-0">
                    <p class="">Tamires Santos</p>
                    <p class="rkt ml-5 has-text-weight-semibold"> 4.30 rkt</p>
                  </div>
                </div>
                <Card.Image className="">
                  <Image.Container>
                    <Image src={astronauta4} />
                  </Image.Container>
                </Card.Image>
              </Card>
            </Column>
          </Column.Group>
        </Container>
      </Section>
      <Section>
        <Container>
          <Column.Group>
            <Column className="has-text-centered mb-5">
              <Title className="has-text-light">Melhores <span class="is-red">Artistas</span></Title>
            </Column>
          </Column.Group>
          <Column.Group className="mt-5 is-flex-wrap-wrap">
            <Column size={4} className="">
              <Card className="card-social p-4">
                <div class="is-flex">
                  <Card.Image>
                    <Image src={artista1} />
                  </Card.Image>
                  <div class="my-auto has-text-weight-semibold">
                    <p class="has-text-light mb-2">João Maia</p>
                    <p class="is-red">80 fotografias</p>
                  </div>
                </div>
              </Card>
            </Column>
            <Column size={4} className="">
              <Card className="card-social-red p-4">
                <div class="is-flex">
                  <Card.Image>
                    <Image src={artista2} />
                  </Card.Image>
                  <div class="my-auto has-text-weight-semibold">
                    <p class="has-text-light mb-2">Jakeliny G.</p>
                    <p class="has-text-light">99 fotografias</p>
                  </div>
                </div>
              </Card>
            </Column>
            <Column size={4} className="">
              <Card className="card-social p-4">
                <div class="is-flex">
                  <Card.Image>
                    <Image src={artista3} />
                  </Card.Image>
                  <div class="my-auto has-text-weight-semibold">
                    <p class="has-text-light mb-2">João L. (biro)</p>
                    <p class="is-red">50 fotografias</p>
                  </div>
                </div>
              </Card>
            </Column>
            <Column size={4} className="">
              <Card className="card-social p-4">
                <div class="is-flex">
                  <Card.Image>
                    <Image src={artista4} />
                  </Card.Image>
                  <div class="my-auto has-text-weight-semibold">
                    <p class="has-text-light mb-2">Tamires Santos</p>
                    <p class="is-red">43 fotografias</p>
                  </div>
                </div>
              </Card>
            </Column>
            <Column size={4} className="">
              <Card className="card-social p-4">
                <div class="is-flex">
                  <Card.Image>
                    <Image src={artista5} />
                  </Card.Image>
                  <div class="my-auto has-text-weight-semibold">
                    <p class="has-text-light mb-2">Ana Silva</p>
                    <p class="is-red">28 fotografias</p>
                  </div>
                </div>
              </Card>
            </Column>
            <Column size={4} className="">
              <Card className="card-social p-4">
                <div class="is-flex">
                  <Card.Image>
                    <Image src={artista6} />
                  </Card.Image>
                  <div class="my-auto has-text-weight-semibold">
                    <p class="has-text-light mb-2">Diego F.</p>
                    <p class="is-red">20 fotografias</p>
                  </div>
                </div>
              </Card>
            </Column>
          </Column.Group>
          <Column.Group className="pt-5 mb-5">
            <Column>
              <a href="#" class="has-text-light is-flex is-justify-content-center">Veja todos os artistas
                <svg class="ml-2 mt-1" width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.98811 4.20788L1.63474 14.3674L3.75438 15.6929L10.1078 5.53343L11.8123 12.9286L14.248 12.3671L11.585 0.81365L0.031564 3.47665L0.592988 5.91241L7.98811 4.20788Z" fill="#FF5B50" />
                </svg>
              </a>
            </Column>
          </Column.Group>
        </Container>
      </Section>
      <Section className="section-footer border-b">
        <Container>
          <Column.Group className="back-footer ">
            <Column className="py-5">
              <Title className="has-text-light is-flex is-align-items-center">Rocket <span class="is-red">NFTs</span></Title>
            </Column>
            <Column className="is-flex-desktop is-justify-content-end is-align-items-center">
              <Button color="danger">
                <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.44174 6.70327L9.79825 22.676L13.1308 22.6016L12.7742 6.62889L20.0871 13.6224L22.3906 11.2138L10.9656 0.287669L0.0395174 11.7127L2.44818 14.0162L9.44174 6.70327Z" fill="black" />
                </svg>
              </Button>
            </Column>
          </Column.Group>
        </Container>
      </Section>
      <Section className="section-footer border-b">
        <Container>
          <Column.Group>
            <Column>
              ...
            </Column>
            <Column size={8}>
              ...
            </Column>
          </Column.Group>
        </Container>
      </Section>
    </Fragment>
  );
}

export default App;