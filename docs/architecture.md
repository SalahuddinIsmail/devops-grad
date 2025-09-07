# Architecture
GitHub → Actions (CI) → GHCR → Actions (CD) → AKS (Ingress/TLS) → Monitoring/Alerts
                      ↘ SSH → Azure VM (Compose) [fallback]
