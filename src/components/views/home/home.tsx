import React, {FC} from 'react';
import {Box, Button, FormControl, Grid, TextField, Typography} from '@mui/material';
import Image from 'next/image';
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';

interface HomeProps {
  children?: React.ReactNode;
}

const Home: FC<HomeProps> = props => {
  const {children} = props;

  return (
    <Box>
      <Box>
        <Grid container sx={{justifyContent: 'center'}}>
          <Grid
            item
            xs={6}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              maxHeight: 800,
            }}
          >
            <Box>
              <Image src='/images/mainLogo.png' width={200} height={200} />
            </Box>
            <Typography variant='h4' sx={{color: '#1A9CB7', textAlign: 'center'}}>
              مستندات <br /> ساده ساخته شده است
            </Typography>
          </Grid>
          <Grid
            item
            xs={6}
            sx={{
              filter:
                'grayscale(100%) brightness(70%) sepia(50%) hue-rotate(-100deg) saturate(500%) contrast(1)',
            }}
          >
            <Image src='/images/adult-career.webp' layout='responsive' height={616} width={1024} />
          </Grid>
        </Grid>
      </Box>
      <Box sx={{height: 777}}>
        <Swiper dir='rtl' className='mySwiper' style={{height: '100%'}}>
          <SwiperSlide>
            <Box
              sx={{
                background: '#50bab1',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Typography variant='h4' color='#fff' sx={{maxWidth: 500}}>
                “به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح
                گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل
                ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی
                نوع و اندازه فونت و ظاهر متن باشد.”
              </Typography>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{
                background: '#1a9cb7',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {' '}
              <Typography variant='h4' color='#fff' sx={{maxWidth: 500}}>
                “به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح
                گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل
                ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی
                نوع و اندازه فونت و ظاهر متن باشد.”
              </Typography>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{
                background: '#a38fb8',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {' '}
              <Typography variant='h4' color='#fff' sx={{maxWidth: 500}}>
                “به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح
                گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل
                ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی
                نوع و اندازه فونت و ظاهر متن باشد.”
              </Typography>
            </Box>
          </SwiperSlide>
        </Swiper>
      </Box>
      <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 4}}>
        <Typography variant='h4' sx={{color: '#1A9CB7'}}>
          دستیار چگونه کار می کند؟
        </Typography>
        <Typography
          variant='h6'
          sx={{
            marginTop: 3,
            marginBottom: 3,
            color: '#6C498F',
            maxWidth: 816,
            textAlign: 'justify',
          }}
        >
          ه متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک
          از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی
          طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و
          ظاهر متن باشد.
        </Typography>
        <Typography variant='h4' sx={{color: '#30154B', marginBottom: 3}}>
          فواید دستیار
        </Typography>
        <Grid container spacing={5} sx={{justifyContent: 'center'}}>
          <Grid item sx={{textAlign: 'center'}}>
            <Image src='/images/ehr.webp' height={84} width={84} />
            <Typography variant='h4' sx={{color: '#1A9CB7'}}>
              لورم
            </Typography>
          </Grid>
          <Grid item sx={{textAlign: 'center'}}>
            <Image src='/images/mobile.webp' height={84} width={84} />
            <Typography variant='h4' sx={{color: '#1A9CB7'}}>
              لورم
            </Typography>
          </Grid>
          <Grid item sx={{textAlign: 'center'}}>
            <Image src='/images/intuitive.webp' height={84} width={84} />
            <Typography variant='h4' sx={{color: '#1A9CB7'}}>
              لورم
            </Typography>
          </Grid>
          <Grid item sx={{textAlign: 'center'}}>
            <Image src='/images/compliant.webp' height={84} width={84} />
            <Typography variant='h4' sx={{color: '#1A9CB7'}}>
              لورم
            </Typography>
          </Grid>
          <Grid item sx={{textAlign: 'center'}}>
            <Image src='/images/immediate.webp' height={84} width={84} />
            <Typography variant='h4' sx={{color: '#1A9CB7'}}>
              لورم
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          backgroundColor: 'rgb(48, 21, 75)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: 8,
        }}
      >
        <Typography variant='h4' sx={{color: '#fff', textAlign: 'center', maxWidth: 780}}>
          صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی
          برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا
          از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد. معمولا طراحان گرافیک برای
          صفحه‌آرایی، نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند
        </Typography>

        <Typography
          variant='h4'
          sx={{color: '#fff', textAlign: 'center', marginTop: 8, maxWidth: 780}}
        >
          صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی
          برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا
          از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد. معمولا طراحان گرافیک برای
          صفحه‌آرایی، نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 8,
        }}
      >
        <Grid container spacing={6} sx={{justifyContent: 'center'}}>
          <Grid item>
            <Typography variant='h4' color='#1a9cb7' sx={{maxWidth: 500}}>
              “به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح
              گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل
              ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع
              و اندازه فونت و ظاهر متن باشد.”
            </Typography>
          </Grid>
          <Grid item>
            <Box
              sx={{borderRadius: '50%', filter: 'sepia(100%) hue-rotate(195deg) saturate(400%)'}}
            >
              <Image src='/images/dao.webp' height={340} width={340} layout='fixed' />
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{height: 777}}>
        <Swiper dir='rtl' className='mySwiper' style={{height: '100%'}}>
          <SwiperSlide>
            <Box
              sx={{
                background: '#50bab1',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Typography variant='h4' color='#fff' sx={{maxWidth: 500}}>
                “به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح
                گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل
                ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی
                نوع و اندازه فونت و ظاهر متن باشد.”
              </Typography>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{
                background: '#1a9cb7',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {' '}
              <Typography variant='h4' color='#fff' sx={{maxWidth: 500}}>
                “به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح
                گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل
                ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی
                نوع و اندازه فونت و ظاهر متن باشد.”
              </Typography>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{
                background: '#a38fb8',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Typography variant='h4' color='#fff' sx={{maxWidth: 500}}>
                “به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح
                گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل
                ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی
                نوع و اندازه فونت و ظاهر متن باشد.”
              </Typography>
            </Box>
          </SwiperSlide>
        </Swiper>
      </Box>
      <Box id='contact' sx={{backgroundColor: '#6c498f'}}>
        <Grid container>
          <Grid
            item
            xs={6}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Box
              component='form'
              sx={{
                display: 'flex',
                flexDirection: 'column',
                boxShadow: 3,
                padding: 4,
                minWidth: 500,
              }}
              noValidate
              autoComplete='off'
            >
              <FormControl sx={{marginBottom: 3}}>
                <Typography variant='h5' color='#fff'>
                  اطلاعات بیشتری می خواهید؟
                </Typography>
              </FormControl>
              <FormControl sx={{marginBottom: 3}}>
                <TextField label='علاقه مند به؟' variant='standard' color='info' focused />
              </FormControl>
              <FormControl sx={{marginBottom: 3}}>
                <TextField label='ایمیل' variant='standard' color='info' focused />
              </FormControl>
              <FormControl sx={{display: 'flex'}}>
                <Button variant='contained' color='secondary' type='submit' sx={{maxWidth: 0}}>
                  ارسال
                </Button>
              </FormControl>
            </Box>
          </Grid>
          <Grid item xs={6} sx={{position: 'relative', minHeight: 900, zIndex: 1}}>
            <Box sx={{padding: 10, marginRight: 5}}>
              <Typography variant='h5' color='#fff' sx={{marginBottom: 2}}>
                تماس با ما
              </Typography>
              <Typography variant='subtitle2' color='#fff'>
                دفتر :
              </Typography>
              <Typography variant='subtitle2' color='#fff'>
                021-33661234
              </Typography>
              <Typography variant='subtitle2' color='#fff'>
                کرج، جاده ملارد، بلوار مپنا (نیرو گاه سابق) شهرک صنعتی نور، خیابان نور
              </Typography>
            </Box>
            <Box
              sx={{
                position: 'absolute',
                zIndex: -1,
                top: 0,
                bottom: 0,
                right: 0,
                left: 0,
                background: `url(/images/contact-us.webp)`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Home;
