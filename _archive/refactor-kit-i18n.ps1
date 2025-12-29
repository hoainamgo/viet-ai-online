# Script to batch update multiple kit pages with data-kit attributes
# This PowerShell script applies the same i18n refactoring pattern to all kit pages

$kits = @(
    @{name="tikt ok"; gradient="from-pink-400 via-purple-400 to-cyan-400"},
    @{name="marketing"; gradient="from-blue-400 via-indigo-400 to-purple-400"},
    @{name="engineer"; gradient="from-emerald-400 via-cyan-400 to-blue-400"},
    @{name="brand"; gradient="from-amber-400 via-orange-400 to-yellow-400"},
    @{name="writer"; gradient="from-teal-400 via-emerald-400 to-green-400"}
)

foreach ($kit in $kits) {
    $filename = "c:\SME\LandingPage\$($kit.name).html"
    Write-Host "Processing $filename..." -ForegroundColor Cyan
    
    if (!(Test-Path $filename)) {
        Write-Host "  File not found, skipping..." -ForegroundColor Yellow
        continue
    }
    
    $content = Get-Content $filename -Raw -Encoding UTF8
    
    # Replace badge
    $content = $content -replace 'data-t="kit_badge" class="([^"]*)">[^<]+<', 'data-kit="badge" class="$1"><'
    
    # Replace hero title - preserve gradient but use data-kit
    $content = $content -replace '(?s)<h1[^>]*data-t="kit_hero_title"[^>]*>.*?<span[^>]*class="([^"]*bg-gradient-to-r[^"]*)"[^>]*>[^<]*</span>\s*</h1>', '<h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight"><span data-kit="name" class="$1"></span></h1>'
    
    # Replace subtitle
    $content = $content -replace '(?s)<p data-t="kit_hero_subtitle"[^>]*>.*?</p>', '<p data-kit="heroDesc" class="text-lg md:text-xl text-white/60 mb-8"></p>'
    
    # Replace CTA button text
    $content = $content -replace '<span data-t="kit_cta_buy">[^<]+</span>', '<span data-kit="ctaText"></span> — <span data-kit="price"></span>'
    
    Set-Content -Path $filename -Value $content -Encoding UTF8 -NoNewline
    Write-Host "  ✓ Updated successfully" -ForegroundColor Green
}

Write-Host "`nAll kit pages updated with data-kit attributes!" -ForegroundColor Cyan
Write-Host "Changes applied:" -ForegroundColor White
Write-Host "  - Badge: data-kit=`"badge`"" -ForegroundColor Gray
Write-Host "  - Title: data-kit=`"name`"" -ForegroundColor Gray  
Write-Host "  - Subtitle: data-kit=`"heroDesc`"" -ForegroundColor Gray
Write-Host "  - CTA: data-kit=`"ctaText`" + data-kit=`"price`"" - ForegroundColor Gray
