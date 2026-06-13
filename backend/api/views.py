from rest_framework import viewsets, permissions, status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from django.contrib.auth import authenticate
from .models import CaseStudy, Insight, Message
from .serializers import CaseStudySerializer, InsightSerializer, MessageSerializer


class LoginView(APIView):
    """
    POST /api/auth/login/
    Body: { "username": "...", "password": "..." }
    Returns: { "token": "..." }
    """
    permission_classes = [permissions.AllowAny]

    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')

        if not username or not password:
            return Response(
                {'error': 'Username and password are required.'},
                status=status.HTTP_400_BAD_REQUEST
            )

        user = authenticate(username=username, password=password)
        if user is None:
            return Response(
                {'error': 'Invalid credentials. Please try again.'},
                status=status.HTTP_401_UNAUTHORIZED
            )

        token, _ = Token.objects.get_or_create(user=user)
        return Response({
            'token': token.key,
            'username': user.username,
            'is_staff': user.is_staff,
        })


class CaseStudyViewSet(viewsets.ModelViewSet):
    queryset = CaseStudy.objects.all().order_by('-created_at')
    serializer_class = CaseStudySerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]


class InsightViewSet(viewsets.ModelViewSet):
    queryset = Insight.objects.all().order_by('-created_at')
    serializer_class = InsightSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]


class MessageViewSet(viewsets.ModelViewSet):
    queryset = Message.objects.all().order_by('-date')
    serializer_class = MessageSerializer

    def get_permissions(self):
        # Anyone can POST (submit contact form), but list/update/delete requires auth
        if self.action == 'create':
            return [permissions.AllowAny()]
        return [permissions.IsAuthenticated()]
