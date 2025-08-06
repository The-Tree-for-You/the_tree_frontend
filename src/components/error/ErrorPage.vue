<template>
    <div class="flex flex-col items-center justify-center min-h-screen bg-orange">
        <!-- 카드 컨테이너 -->
        <div class="bg-white rounded-2xl shadow-2xl p-8 mx-4 max-w-md w-full transform hover:scale-105 transition-all duration-300">
            <!-- 로고 -->
            <div class="text-center mb-6">
                <img :src="TheTreeLogo" alt="The Tree Logo" class="w-20 h-auto mx-auto opacity-90" />
            </div>
            
            <!-- 오류 코드 -->
            <div class="text-center mb-6">
                <h1 class="text-6xl font-bold text-orange-600 mb-2">{{ errorConfig.code }}</h1>
                <h2 class="text-xl font-semibold text-gray-700 mb-4">{{ errorConfig.title }}</h2>
            </div>
            
            <!-- 구분선 -->
            <div class="w-16 h-1 bg-orange-200 mx-auto mb-6 rounded-full"></div>
            
            <!-- 메시지 -->
            <div class="text-center mb-8">
                <p class="text-lg text-gray-700 mb-3 font-medium">
                    {{ errorConfig.primaryMessage }}
                </p>
                <p class="text-gray-500 text-sm">
                    {{ errorConfig.secondaryMessage }}
                </p>
            </div>
            
            <!-- 버튼들 -->
            <div class="space-y-3">
                <a v-if="errorConfig.primaryButton" 
                   :href="errorConfig.primaryButton.href" 
                   class="block w-full px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transform hover:scale-105 transition-all duration-300 text-center shadow-lg">
                    {{ errorConfig.primaryButton.text }}
                </a>
                <button v-if="errorConfig.secondaryButton" 
                        @click="errorConfig.secondaryButton.action" 
                        class="block w-full px-6 py-3 bg-transparent text-orange-600 font-semibold rounded-lg border-2 border-orange-600 hover:bg-orange-600 hover:text-white transition-all duration-300">
                    {{ errorConfig.secondaryButton.text }}
                </button>
            </div>
            
            <!-- 추가 정보 -->
            <div class="text-center mt-6 pt-4 border-t border-gray-200">
                <p class="text-gray-400 text-xs">
                    The Tree - 당신의 이야기를 들어드립니다
                </p>
            </div>
        </div>
        
        <!-- 배경 장식 요소들 -->
        <div class="absolute top-10 left-10 w-20 h-20 bg-white opacity-10 rounded-full"></div>
        <div class="absolute bottom-10 right-10 w-32 h-32 bg-white opacity-10 rounded-full"></div>
        <div class="absolute top-1/2 left-5 w-16 h-16 bg-white opacity-10 rounded-full"></div>
        <div class="absolute top-1/3 right-5 w-12 h-12 bg-white opacity-10 rounded-full"></div>
    </div>
</template>

<script>
import TheTreeLogo from '@/assets/The_tree_Icon.png';

export default {
    name: 'ErrorPage',
    props: {
        errorType: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            TheTreeLogo
        };
    },
    computed: {
        errorConfig() {
            const configs = {
                '400': {
                    code: '400',
                    title: 'Bad Request',
                    primaryMessage: '잘못된 요청입니다.',
                    secondaryMessage: '요청을 다시 확인해 주세요.',
                    primaryButton: {
                        text: '홈으로 돌아가기',
                        href: '/'
                    }
                },
                '401': {
                    code: '401',
                    title: 'Unauthorized',
                    primaryMessage: '로그인이 필요한 페이지입니다.',
                    secondaryMessage: '계속하려면 로그인해 주세요.',
                    primaryButton: {
                        text: '로그인 페이지로 이동',
                        href: '/signin'
                    }
                },
                '403': {
                    code: '403',
                    title: 'Forbidden',
                    primaryMessage: '접근 권한이 없습니다.',
                    secondaryMessage: '이 페이지에 접근할 수 있는 권한이 없습니다.',
                    primaryButton: {
                        text: '홈으로 돌아가기',
                        href: '/'
                    }
                },
                '404': {
                    code: '404',
                    title: 'Page Not Found',
                    primaryMessage: '찾으시는 페이지가 존재하지 않습니다.',
                    secondaryMessage: 'URL을 다시 확인해 주세요.',
                    primaryButton: {
                        text: '홈으로 돌아가기',
                        href: '/'
                    },
                    secondaryButton: {
                        text: '로그인 페이지로 이동',
                        action: () => window.location.href = '/signin'
                    }
                },
                '408': {
                    code: '408',
                    title: 'Request Timeout',
                    primaryMessage: '요청 시간이 초과되었습니다.',
                    secondaryMessage: '잠시 후 다시 시도해 주세요.',
                    primaryButton: {
                        text: '홈으로 돌아가기',
                        href: '/'
                    },
                    secondaryButton: {
                        text: '다시 시도',
                        action: () => window.location.reload()
                    }
                },
                '500': {
                    code: '500',
                    title: 'Internal Server Error',
                    primaryMessage: '서버에서 오류가 발생했습니다.',
                    secondaryMessage: '잠시 후 다시 시도해 주세요.',
                    primaryButton: {
                        text: '홈으로 돌아가기',
                        href: '/'
                    },
                    secondaryButton: {
                        text: '페이지 새로고침',
                        action: () => window.location.reload()
                    }
                },
                '503': {
                    code: '503',
                    title: 'Service Unavailable',
                    primaryMessage: '서비스가 일시적으로 사용할 수 없습니다.',
                    secondaryMessage: '잠시 후 다시 시도해 주세요.',
                    primaryButton: {
                        text: '홈으로 돌아가기',
                        href: '/'
                    },
                    secondaryButton: {
                        text: '다시 시도',
                        action: () => window.location.reload()
                    }
                },
                '504': {
                    code: '504',
                    title: 'Gateway Timeout',
                    primaryMessage: '게이트웨이 시간 초과입니다.',
                    secondaryMessage: '서버 응답이 지연되고 있습니다.',
                    primaryButton: {
                        text: '홈으로 돌아가기',
                        href: '/'
                    },
                    secondaryButton: {
                        text: '다시 시도',
                        action: () => window.location.reload()
                    }
                },
                'default': {
                    code: '!',
                    title: 'Unknown Error',
                    primaryMessage: '알 수 없는 오류가 발생했습니다.',
                    secondaryMessage: '관리자에게 문의해 주세요.',
                    primaryButton: {
                        text: '메인 페이지로 이동',
                        href: '/'
                    }
                }
            };
            
            return configs[this.errorType] || configs['default'];
        }
    }
};
</script>

<style scoped>
/* 추가 애니메이션 효과 */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes float {
    0%, 100% {
        transform: translateY(0px);
    }
    50% {
        transform: translateY(-10px);
    }
}

.fade-in-up {
    animation: fadeInUp 0.8s ease-out;
}

/* 카드 호버 효과 */
.card-hover {
    transition: all 0.3s ease;
}

.card-hover:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

/* 배경 장식 애니메이션 */
.bg-decoration {
    animation: float 6s ease-in-out infinite;
}
</style> 